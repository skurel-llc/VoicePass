import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function POST(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const currentUser = await getCurrentUser();
        
        if (!currentUser || currentUser.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const url = new URL(req.url);
        const pathSegments = url.pathname.split('/');
        const userId = parseInt(pathSegments[3]);

        const { amount } = await req.json();

        if (!amount || typeof amount !== 'number' || amount <= 0) {
            return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
        }

        const targetUser = await db.vp_user.findUnique({
            where: { id: userId },
        });

        if (!targetUser) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Update user balance
        const updatedUser = await db.vp_user.update({
            where: { id: userId },
            data: {
                balance: { increment: amount },
            },
        });

        // Create transaction record
        await db.vp_transactions.create({
            data: {
                vp_user: {
                    connect: { id: userId },
                },
                type: 'CREDIT',
                amount: amount,
                description: `Top-up by admin ${currentUser.email}`,
                reference: `ADMIN-TOPUP-${Date.now()}`,
                balance_after: updatedUser.balance,
            },
        });

        return NextResponse.json({ success: true, balance: updatedUser.balance });
    } catch (error) {
        console.error('Topup error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
