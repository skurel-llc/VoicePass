import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getCurrentUser } from '@/lib/auth';

const prisma = new PrismaClient();

export async function DELETE(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await context.params;
        const userId = parseInt(resolvedParams.id);

        const currentUser = await getCurrentUser();
        
        if (!currentUser) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (currentUser.role !== 'admin') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        // Prevent admins from deleting themselves
        if (userId.toString() === currentUser.id) {
            return NextResponse.json({ error: 'Cannot delete yourself' }, { status: 400 });
        }

        // Delete user and all related records (cascade should handle this)
        await prisma.vp_user.delete({
            where: { id: userId },
        });

        return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}