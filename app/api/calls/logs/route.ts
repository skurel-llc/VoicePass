import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { decrypt } from '@/lib/encryption';
import { requireAuth } from '@/lib/auth';
import { Prisma } from '@prisma/client';

export async function GET(req: NextRequest) {
  try {
    const user = await requireAuth();
    const { searchParams } = new URL(req.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    const skip = (page - 1) * limit;

    // Build filter
    const where: Prisma.CallLogWhereInput = { userId: user.id };
    if (status) where.status = status;

    // Get logs
    const [logs, total] = await Promise.all([
      db.callLog.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      db.callLog.count({ where }),
    ]);

    // Decrypt phone numbers for display
    const decryptedLogs = logs.map(log => ({
      ...log,
      phoneNumber: decrypt(log.phoneNumber),
      otp: undefined, // Never expose OTP
    }));

    // Filter by search if provided
    let filteredLogs = decryptedLogs;
    if (search) {
      filteredLogs = decryptedLogs.filter(log =>
        log.phoneNumber.includes(search) || log.callId.includes(search)
      );
    }

    return NextResponse.json({
      logs: filteredLogs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Fetch logs error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch logs' },
      { status: 500 }
    );
  }
}