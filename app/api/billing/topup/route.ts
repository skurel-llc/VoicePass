import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth();
    const { amount } = await req.json();

    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: 'Minimum top-up amount is ₦100' },
        { status: 400 }
      );
    }

    // Get current balance
    const balance = await db.creditBalance.findUnique({
      where: { userId: user.id },
    });

    const currentBalance = balance?.balance || 0;
    const newBalance = currentBalance + amount;

    // Update balance
    await db.creditBalance.upsert({
      where: { userId: user.id },
      create: {
        userId: user.id,
        balance: newBalance,
      },
      update: {
        balance: newBalance,
      },
    });

    // Create transaction record
    await db.transaction.create({
      data: {
        userId: user.id,
        type: 'CREDIT',
        amount,
        balanceAfter: newBalance,
        description: `Credit top-up`,
        reference: `TOP_${Date.now()}`,
      },
    });

    return NextResponse.json({
      success: true,
      balance: newBalance,
      amount,
    });
  } catch (error: any) {
    console.error('Top-up error:', error);
    return NextResponse.json(
      { error: error.message || 'Top-up failed' },
      { status: 500 }
    );
  }
}