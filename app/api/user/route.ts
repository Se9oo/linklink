import { supabase } from '@/lib/supabase';
import { GetUserParamsType } from '@/types/api/user';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const query = request.nextUrl.searchParams;

		const { data } = await supabase
			.from('user')
			.select('*')
			.eq('socialId', query.get('socialId'))
			.eq('loginType', query.get('loginType'));

		return NextResponse.json({ status: 'success', message: '', resultData: data });
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ status: 'fail', message: error.message, resultData: null });
		}

		return NextResponse.json({ status: 'fail', message: 'server error', resultData: null });
	}
}

export async function POST(request: NextRequest) {
	try {
		const params = await request.json();

		const { userName, socialId, loginType } = params;

		const { data } = await supabase.from('user').insert({
			userName,
			socialId,
			loginType,
		});

		return NextResponse.json({ status: 'success', message: '', resultData: data });
	} catch (error: unknown) {
		if (error instanceof Error) {
			return NextResponse.json({ status: 'fail', message: error.message, resultData: null });
		}

		return NextResponse.json({ status: 'fail', message: 'server error', resultData: null });
	}
}
