import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { ContactModule } from './contact/contact.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 30,
      },
    ]),
    ContactModule,
    HealthModule,
  ],
})
export class AppModule {}
