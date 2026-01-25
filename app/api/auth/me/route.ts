import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userFromDb = await db.vp_user.findUnique({
      where: { id: Number(user.id) },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        company: true,
        phone: true,
        balance: true,
      },
    });

    if (!userFromDb) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    return NextResponse.json(userFromDb);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}