/* eslint-disable import/no-extraneous-dependencies */
import UserAPI from '@/api/UserAPI';
import { INTERNAL_URLS } from '@/constants/url';
import type { Account, NextAuthOptions, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import GithubProvider from 'next-auth/providers/github';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID || '',
			clientSecret: process.env.GITHUB_CLIENT_SECRETS || '',
		}),
		KakaoProvider({
			clientId: process.env.KAKAO_CLIENT_ID || '',
			clientSecret: process.env.KAKAO_CLIENT_SECRETS || '',
		}),
		NaverProvider({
			clientId: process.env.NAVER_CLIENT_ID || '',
			clientSecret: process.env.NAVER_CLIENT_SECRETS || '',
		}),
	],
	pages: {
		signIn: INTERNAL_URLS.LOGIN,
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			try {
				const { name } = user as User | AdapterUser;
				const { provider, providerAccountId } = account as Account;
				// 기존 회원 여부 체크
				const { status, message, resultData } = await UserAPI.getUser({
					socialId: providerAccountId,
					loginType: provider,
				});

				if (status === 'fail') {
					return false;
				}

				if (resultData.length === 0) {
					// 회원 가입
					await UserAPI.postSignUpUser({
						userName: name,
						socialId: providerAccountId,
						loginType: provider,
					});
				}

				return true;
			} catch (error) {
				return false;
			}
		},
	},
	secret: process.env.JWT_SECRET || '',
};
