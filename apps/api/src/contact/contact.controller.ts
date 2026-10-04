import { Controller, Post, Body, Ip, Headers, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';

@Controller('contact')
@UseGuards(ThrottlerGuard)
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  async create(
    @Body() dto: CreateMessageDto,
    @Ip() ip: string,
    @Headers('user-agent') ua: string,
  ) {
    return this.contactService.handleInquiry(dto, ip, ua);
  }
}
