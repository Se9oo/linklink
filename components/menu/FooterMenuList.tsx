import { FooterMenus } from '@/constants/menu';

const FooterMenuList = () => {
  return (
    <ul className="flex justify-between w-full text-center h-[72px] bg-white rounded-t-[36px]">
      {FooterMenus.map((menu) => {
        const { id, renderIcon } = menu;

        return (
          <li key={id} className="flex-1">
            <button type="button" className="flex items-center justify-center w-full h-full cursor-pointer">
              {renderIcon}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterMenuList;
