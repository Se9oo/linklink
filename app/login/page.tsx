import SignInProviderList from '@/components/signin/SignInProviderList';
import { getProviders } from 'next-auth/react';

const Login = async () => {
	const providers = await getProviders();
	return (
		<main className="relative flex flex-col justify-center w-full h-full px-6 pt-12">
			<SignInProviderList providers={providers} />
		</main>
	);
};

export default Login;
