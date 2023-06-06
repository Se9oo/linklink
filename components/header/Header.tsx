import { IconUser } from '@tabler/icons-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex items-center justify-between w-full p-6 h-header">
      <span>logo</span>
      <IconUser className="cursor-pointer" />
    </header>
  );
};

export default Header;
