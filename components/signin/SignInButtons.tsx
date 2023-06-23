'use client';

interface ConfigType {
	[key: string]: {
		bgColor: string;
		color: string;
	};
}

interface LogoType {
	[key: string]: string;
}

const buttonConfig: ConfigType = {
	github: {
		bgColor: 'bg-black',
		color: 'text-white',
	},
	kakao: {
		bgColor: 'bg-kakao',
		color: 'text-black',
	},
};

const logos: LogoType = {
	github: 'https://github.githubassets.com/favicons/favicon-dark.png',
	kakao: 'https://www.kakaocorp.com/page/favicon.ico',
};

const SignInButtons = ({
	providerName,
	handleSignIn,
}: {
	providerName: string;
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
