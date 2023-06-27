'use client';

import { EXTERNAL_URLS } from '@/constants/url';

type ProviderNames = 'github' | 'kakao' | 'naver';
interface ConfigOptions {
	bgColor: string;
	color: string;
}

type ConfigType = Record<ProviderNames, ConfigOptions>;
type LogoType = Record<ProviderNames, string>;

const buttonConfig: ConfigType = {
	github: {
		bgColor: 'bg-black',
		color: 'text-white',
	},
	kakao: {
		bgColor: 'bg-kakao',
		color: 'text-black',
	},
	naver: {
		bgColor: 'bg-naver',
		color: 'text-white',
	},
};

const logos: LogoType = {
	github: EXTERNAL_URLS.GITHUB_LOGO,
	kakao: EXTERNAL_URLS.KAKAO_LOGO,
	naver: EXTERNAL_URLS.NAVER_LOGO,
};

const SignInButtons = ({
	providerName,
	handleSignIn,
}: {
	providerName: ProviderNames;
	handleSignIn: (name: string) => void;
}) => {
	return (
		<button
			type="button"
			className={`w-full relative text-center rounded-md p-4
      ${buttonConfig[providerName].bgColor}
      ${buttonConfig[providerName].color}`}
			onClick={() => handleSignIn(providerName)}
		>
			<img className="absolute top-[50%] translate-y-[-50%] w-6 mr-2" src={logos[providerName]} alt="" />
			Sign in with {providerName}
		</button>
	);
};

export default SignInButtons;
