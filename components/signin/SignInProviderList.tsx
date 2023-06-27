'use client';

import { useSearchParams } from 'next/navigation';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import { INTERNAL_URLS } from '@/constants/url';
import SignInButtons from './SignInButtons';

const SignInProviderList = ({
	providers,
}: {
	providers: Record<'github' | 'kakao' | 'naver', ClientSafeProvider> | null;
}) => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl') || '';

	const handleSignIn = (providerName: string) => {
		signIn(providerName, { callbackUrl: `${callbackUrl}/${INTERNAL_URLS.HOME}` });
	};

	if (!providers) return null;

	return (
		<ul>
			{(Object.keys(providers) as (keyof typeof providers)[]).map((provider) => {
				return (
					<li key={provider} className="mb-2">
						<SignInButtons providerName={provider} handleSignIn={handleSignIn} />
					</li>
				);
			})}
		</ul>
	);
};

export default SignInProviderList;
