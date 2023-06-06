import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mt-[48px] flex-1 w-full p-6">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
