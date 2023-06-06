import { ReactNode } from 'react';
import { IconCategory, IconStar, IconSquareRoundedPlus } from '@tabler/icons-react';

interface FooterMenuItemType {
  id: string;
  renderIcon: ReactNode;
  name: string;
}

export const FooterMenus: FooterMenuItemType[] = [
  {
    id: 'categories',
    renderIcon: <IconCategory />,
    name: '메뉴',
  },
  {
    id: 'favorites',
    renderIcon: <IconStar />,
    name: '즐겨찾기',
  },
  {
    id: 'addLink',
    renderIcon: <IconSquareRoundedPlus />,
    name: '추가',
  },
];
