import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    const {
      call_id,
      status,
      start_time,
      answer_time,
      ring_time,
      call_time,
    } = data;

    // Find call log
    const callLog = await db.callLog.findUnique({
      where: { callId: call_id },
      include: { user: true },
    });

    if (!callLog) {
      return NextResponse.json(
        { error: 'Call not found' },
        { status: 404 }
      );
    }

    // Calculate cost
    let cost = 0;
    if (status === 'ANSWERED' || status === 'COMPLETED') {
      cost = 3.5; // ₦3.5 per successful call
    }

    // Update call log
    await db.callLog.update({
      where: { callId: call_id },
      data: {
        status,
        startTime: start_time ? new Date(start_time) : null,
        answerTime: answer_time ? new Date(answer_time) : null,
        ringTime: ring_time,
        callTime: call_time,
        duration: call_time,
        cost,
        webhookSent: true,
      },
    });

    // Deduct balance if call was successful
    if (cost > 0) {
      const balance = await db.creditBalance.findUnique({
        where: { userId: callLog.userId },
      });

      const newBalance = (balance?.balance || 0) - cost;

      await db.creditBalance.update({
        where: { userId: callLog.userId },
        data: { balance: newBalance },
      });

      await db.transaction.create({
        data: {
          userId: callLog.userId,
          type: 'DEBIT',
          amount: cost,
          balanceAfter: newBalance,
          description: `Voice OTP call - ${call_id}`,
          reference: call_id,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}