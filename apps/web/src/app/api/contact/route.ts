import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_GMAIL = 'getachewnatnael55@gmail.com';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  const start = performance.now();
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields (name, email, subject, message) are required.' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const timestamp =
      new Date().toLocaleString('en-US', {
        timeZone: 'UTC',
        dateStyle: 'full',
        timeStyle: 'medium',
      }) + ' UTC';

    // Plain text version
    const textContent = `================================================
NEW RECRUITER / OPPORTUNITY INQUIRY
Natnael Getachew Portfolio Website
================================================

Sender Name:    ${name}
Sender Email:   ${email}
Subject / Role: ${subject}
Received At:    ${timestamp}

MESSAGE:
------------------------------------------------
${message}
------------------------------------------------

Direct Reply Link: mailto:${email}?subject=Re:%20[Portfolio%20Inquiry]%20${encodeURIComponent(subject)}
Recipient: ${RECIPIENT_GMAIL}
`;

    // Professional HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0b0f19; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2);">
          
          <!-- Cyber Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #030712 0%, #0f172a 100%); padding: 32px 36px; border-bottom: 3px solid #06b6d4;">
              <table role="presentation" width="100%">
                <tr>
                  <td>
                    <span style="font-family: monospace; font-size: 11px; font-weight: 700; color: #38bdf8; letter-spacing: 0.12em; text-transform: uppercase;">
                      :: DIRECT RECRUITER INGRESS
                    </span>
                    <h1 style="margin: 8px 0 4px 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">
                      New Portfolio Opportunity Inquiry
                    </h1>
                    <p style="margin: 0; color: #94a3b8; font-size: 13px;">
                      Candidate Target: <strong style="color: #f1f5f9;">Natnael Getachew</strong> (${escapeHtml(RECIPIENT_GMAIL)})
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Inquiry Metadata -->
          <tr>
            <td style="padding: 28px 36px 16px 36px; background-color: #f8fafc;">
              <table role="presentation" width="100%" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; width: 35%; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; font-family: monospace;">
                    Sender Name
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; color: #0f172a;">
                    ${escapeHtml(name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; font-family: monospace;">
                    Sender Email
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; color: #0284c7;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; font-family: monospace;">
                    Subject / Role
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; color: #0f172a;">
                    ${escapeHtml(subject)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; font-family: monospace;">
                    Received (UTC)
                  </td>
                  <td style="padding: 10px 0; font-size: 13px; color: #475569;">
                    ${escapeHtml(timestamp)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 24px 36px;">
              <span style="display: block; font-family: monospace; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 10px; letter-spacing: 0.05em;">
                Inquiry Message Content:
              </span>
              <div style="background-color: #f1f5f9; border-left: 4px solid #06b6d4; padding: 20px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.7; color: #1e293b; white-space: pre-wrap; word-break: break-word;">
${escapeHtml(message)}
              </div>

              <!-- Quick Action Button -->
              <table role="presentation" width="100%" style="margin-top: 28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(email)}?subject=Re:%20[Portfolio%20Inquiry]%20${encodeURIComponent(subject)}"
                       style="display: inline-block; background-color: #06b6d4; color: #ffffff; text-decoration: none; padding: 13px 28px; border-radius: 8px; font-weight: 700; font-size: 13px; font-family: monospace; letter-spacing: 0.05em; text-transform: uppercase; box-shadow: 0 4px 12px rgba(6, 182, 212, 0.35);">
                      Reply Directly to ${escapeHtml(name)} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #030712; padding: 22px 36px; border-top: 1px solid #1e293b; text-align: center;">
              <p style="margin: 0; font-family: monospace; font-size: 11px; color: #64748b;">
                Delivered directly to <strong style="color: #94a3b8;">${escapeHtml(RECIPIENT_GMAIL)}</strong> via Natnael Getachew Portfolio
              </p>
              <p style="margin: 6px 0 0 0; font-size: 10px; color: #475569;">
                Natnael Getachew &bull; Software Developer &bull; Addis Ababa, Ethiopia
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    const mailtoFallback = `mailto:${RECIPIENT_GMAIL}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject}`
    )}&body=${encodeURIComponent(
      `Hi Natnael,\n\n${message}\n\n---\nFrom: ${name} (${email})\nSent: ${timestamp}`
    )}`;

    const gmailUser = process.env.GMAIL_USER || RECIPIENT_GMAIL;
    const rawAppPassword = process.env.GMAIL_APP_PASSWORD;
    const gmailAppPassword = rawAppPassword ? rawAppPassword.trim().replace(/\s+/g, '') : '';
    const gmailClientId = process.env.GMAIL_CLIENT_ID;
    const gmailRefreshToken = process.env.GMAIL_REFRESH_TOKEN;

    let messageId = '';
    let isLiveDelivered = false;
    let deliveryMethod = '';
    let deliveryError = '';
    let needsActivation = false;

    // Strategy 1: Gmail SMTP via Google App Password
    if (gmailAppPassword) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true, // SSL
          auth: {
            user: gmailUser,
            pass: gmailAppPassword,
          },
        });

        const info = await transporter.sendMail({
          from: `"${name} (Portfolio Inquiry)" <${gmailUser}>`,
          to: RECIPIENT_GMAIL,
          replyTo: email,
          subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
          text: textContent,
          html: htmlContent,
        });

        messageId = info.messageId || 'smtp-' + Date.now();
        isLiveDelivered = true;
        deliveryMethod = 'gmail_smtp';
      } catch (smtpErr) {
        console.error('[Gmail SMTP Error]:', smtpErr);
        deliveryError = `Gmail SMTP dispatch failed: ${(smtpErr as Error).message}`;
      }
    }
    // Strategy 2: Gmail OAuth2 / API
    else if (gmailClientId && gmailRefreshToken) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: gmailUser,
            clientId: gmailClientId,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            refreshToken: gmailRefreshToken,
          },
        });

        const info = await transporter.sendMail({
          from: `"${name} (Portfolio Inquiry)" <${gmailUser}>`,
          to: RECIPIENT_GMAIL,
          replyTo: email,
          subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
          text: textContent,
          html: htmlContent,
        });

        messageId = info.messageId || 'oauth-' + Date.now();
        isLiveDelivered = true;
        deliveryMethod = 'gmail_oauth2';
      } catch (oauthErr) {
        console.error('[Gmail OAuth2 Error]:', oauthErr);
        deliveryError = `Gmail OAuth2 dispatch failed: ${(oauthErr as Error).message}`;
      }
    }

    // Strategy 3: FormSubmit Forwarder (Fallback if Gmail credentials not configured or failed)
    if (!isLiveDelivered) {
      try {
        const origin = req.headers.get('origin') || 'http://localhost:3000';
        const referer = req.headers.get('referer') || `${origin}/`;

        const fsRes = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_GMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': origin,
            'Referer': referer,
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            _subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
            _replyto: email,
            _template: 'box',
          }),
        });

        const fsData = await fsRes.json();
        if (fsData.success === 'true' || fsData.success === true) {
          isLiveDelivered = true;
          deliveryMethod = 'formsubmit';
          messageId = 'fs-' + Date.now();
        } else {
          const fsMsg = typeof fsData.message === 'string' ? fsData.message : '';
          if (fsMsg.toLowerCase().includes('activation')) {
            needsActivation = true;
            deliveryError = `FormSubmit requires 1-time activation link sent to ${RECIPIENT_GMAIL}. Please check your Gmail to activate, or add GMAIL_APP_PASSWORD to .env.local.`;
          } else {
            deliveryError = fsMsg || deliveryError || 'Form delivery service unavailable.';
          }
        }
      } catch (fsErr) {
        console.error('[FormSubmit Error]:', fsErr);
        if (!deliveryError) {
          deliveryError = (fsErr as Error).message;
        }
      }
    }

    // Optional Telegram notification webhook (always fire if configured)
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (token && chatId) {
      const telegramText = `🚨 *NEW RECRUITER INQUIRY*\n*Candidate:* Natnael Getachew\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: telegramText, parse_mode: 'Markdown' }),
      }).catch((err) => console.error('Telegram alert error:', err));
    }

    const elapsedMs = Math.round(performance.now() - start);

    if (isLiveDelivered) {
      return NextResponse.json({
        success: true,
        deliveredTo: RECIPIENT_GMAIL,
        isLiveDelivered: true,
        deliveryMethod,
        messageId,
        dbLatencyMs: elapsedMs,
        timestamp: new Date().toISOString(),
      });
    }

    // If live delivery was not possible, return structured error with mailto fallback
    return NextResponse.json(
      {
        success: false,
        deliveredTo: RECIPIENT_GMAIL,
        isLiveDelivered: false,
        error:
          deliveryError ||
          `Email delivery service is awaiting setup (configure GMAIL_APP_PASSWORD in .env.local). You can send directly via your mail client.`,
        needsActivation,
        mailtoFallback,
        dbLatencyMs: elapsedMs,
      },
      { status: 503 }
    );
  } catch (err) {
    console.error('Contact email dispatch failure:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to dispatch email to getachewnatnael55@gmail.com',
        details: (err as Error).message,
        mailtoFallback: `mailto:${RECIPIENT_GMAIL}`,
      },
      { status: 500 }
    );
  }
}
