import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'operational',
    service: 'Natnael Getachew Portfolio Web App',
    environment: process.env.NODE_ENV || 'production',
    framework: 'Next.js 16 (App Router)',
    timestamp: new Date().toISOString(),
  });
}
