import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import serverlessExpress from '@codegenie/serverless-express';

let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export default async function handler(req: any, res: any) {
  if (!server) {
    server = await bootstrap();
  }
  return server(req, res);
}

// Support running locally via `npm run dev`
if (require.main === module || !process.env.VERCEL) {
  (async () => {
    const app = await NestFactory.create(AppModule);
    app.enableCors({ origin: '*' });
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    const port = process.env.PORT || 4000;
    await app.listen(port);
    console.log(`[NestJS] API Server listening on http://localhost:${port}`);
  })().catch((err) => {
    // Avoid double-listen in serverless
    if (err?.code !== 'EADDRINUSE') {
      console.log('[NestJS] Standalone runner notice:', err?.message || err);
    }
  });
}
