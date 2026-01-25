import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getCurrentUser } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const currentUser = await getCurrentUser();
        
        if (!currentUser) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Only admins can view all users
        if (currentUser.role !== 'admin') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '20');
        const role = searchParams.get('role');
        const skip = (page - 1) * limit;

        const where: any = {};
        if (role && role !== 'ALL') {
            where.role = role;
        }

        const [users, total] = await Promise.all([
            prisma.vp_user.findMany({
                where,
                select: {
                    id: true,
                    email: true,
                    phone: true,
                    role: true,
                    balance: true,
                    created_at: true,
                    updated_at: true,
                    name: true,
                    company: true,
                },
                orderBy: { created_at: 'desc' },
                skip,
                take: limit,
            }),
            prisma.vp_user.count({ where }),
        ]);

        // Transform to match frontend expectations
        const transformedUsers = users.map(user => ({
            id: user.id,
            name: user.name || null,
            company: user.company || null,
            email: user.email || '',
            phone_number: user.phone || '',
            role: user.role || 'user',
            balance: user.balance || 0,
            created_at: user.created_at?.toISOString() || new Date().toISOString(),
            last_login: user.updated_at?.toISOString() || null,
        }));

        return NextResponse.json({
            users: transformedUsers,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}