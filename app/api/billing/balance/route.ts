import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  try {
    const user = await requireAuth();

    const userData = await db.vp_user.findUnique({
      where: { id: Number(user.id) },
      select: { balance: true, last_bal_updated: true }
    });

    return NextResponse.json({
      balance: userData?.balance || 0,
      lastUpdated: userData?.last_bal_updated,
    });
  } catch (error) {
    console.error('Fetch balance error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch balance' },
      { status: 500 }
    );
  }
}