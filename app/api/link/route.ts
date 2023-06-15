import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const { data } = await supabase.from('link').select('*');

		return NextResponse.json({ status: 'success', message: '', resultData: data });
	} catch (error: Error | any) {
		return NextResponse.json({ status: 'fail', message: error?.message, resultData: null });
	}
}
