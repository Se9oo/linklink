import localFont from 'next/font/local';
import Header from '@/components/header/Header';
import '@/styles/globals.css';
import ReactQueryProvider from '@/components/provider/ReactQueryProvider';
import NextAuthProvider from '@/components/provider/NextAuthProvider';

const pretendard = localFont({
	src: [
		{
			path: '../public/fonts/pretendard/PretendardStd-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/fonts/pretendard/PretendardStd-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/pretendard/PretendardStd-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/pretendard/PretendardStd-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
});

export const metadata = {
	title: 'linklink - 링크링크',
	description: '',
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="ko">
			<body
				className={`${pretendard.className} relative max-w-screen-lg my-0 mx-auto h-screen flex flex-col bg-background tracking-tight leading-4`}
			>
				<ReactQueryProvider>
					<NextAuthProvider>
						<Header />
						{children}
					</NextAuthProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
};

export default RootLayout;
