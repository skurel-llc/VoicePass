import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    // Manually add the column if it's missing, to resolve sync issues
    await db.$executeRaw`ALTER TABLE vp_user ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;`;
    
    return NextResponse.json({ success: true, message: 'Database schema patched: is_active column added.' });
  } catch (error: any) {
    console.error('DB Fix Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}