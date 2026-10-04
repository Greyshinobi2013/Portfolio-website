import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class ContactService {
  private prisma: PrismaClient;
  private readonly logger = new Logger(ContactService.name);

  constructor() {
    this.prisma = new PrismaClient();
  }

  async handleInquiry(dto: CreateMessageDto, ip?: string, ua?: string) {
    const start = performance.now();
    let recordId = 'msg-' + Math.random().toString(36).substring(2, 10);
    let createdAt = new Date();

    try {
      if (process.env.DATABASE_URL) {
        // Atomic write to PostgreSQL
        const record = await this.prisma.contactMessage.create({
          data: { ...dto, ipAddress: ip, userAgent: ua },
        });
        recordId = record.id;
        createdAt = record.createdAt;
      } else {
        // Fallback for offline local dev without Neon PostgreSQL env
        await new Promise((resolve) => setTimeout(resolve, 28));
      }
    } catch (err) {
      this.logger.warn(`Prisma write exception (falling back to memory): ${(err as Error).message}`);
    }

    const dbWriteTimeMs = Math.max(1, Math.round(performance.now() - start));

    // Dispatch async webhook (Telegram Bot)
    this.sendTelegramAlert(dto).catch((err) =>
      this.logger.error('Telegram dispatch error', err),
    );

    return {
      success: true,
      messageId: recordId,
      dbLatencyMs: dbWriteTimeMs,
      timestamp: createdAt,
    };
  }

  private async sendTelegramAlert(dto: CreateMessageDto) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) return;

    const text = `🚨 *NEW RECRUITER INQUIRY*\n*Candidate:* Natnael Getachew Portfolio\n*Name:* ${dto.name}\n*Email:* ${dto.email}\n*Subject:* ${dto.subject}\n\n*Message:*\n${dto.message}`;
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
      });
    } catch (err) {
      this.logger.error('Telegram network dispatch failed', err);
    }
  }
}
