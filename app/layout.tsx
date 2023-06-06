import Footer from '@/components/footer/Footer';
import '@/styles/globals.css';
import localFont from 'next/font/local';

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
  title: 'linklink',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} max-w-screen-lg my-0 mx-auto h-screen flex flex-col bg-background`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
