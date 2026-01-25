import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const view = searchParams.get('view');
    const isAdminView = user.role === 'admin' && view === 'admin';

    if (isAdminView) {
        const totalBalance = await db.vp_user.aggregate({
            _sum: {
                balance: true,
            },
        });

        return NextResponse.json({
            balance: totalBalance._sum.balance || 0,
            lastUpdated: null,
        });

    } else {
        const userData = await db.vp_user.findUnique({
            where: { id: Number(user.id) },
            select: { balance: true, last_bal_updated: true }
        });

        return NextResponse.json({
            balance: userData?.balance || 0,
            lastUpdated: userData?.last_bal_updated,
        });
    }
  } catch (error) {
    console.error('Fetch balance error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch balance' },
      { status: 500 }
    );
  }
}