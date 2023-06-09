/* eslint-disable import/no-extraneous-dependencies */
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID || '',
			clientSecret: process.env.GITHUB_CLIENT_SECRETS || '',
		}),
		// KakaoProvider({
		// 	clientId: '',
		// 	clientSecret: '',
		// }),
	],
	pages: {
		signIn: '/login',
	},
	secret: process.env.JWT_SECRET || '',
};
