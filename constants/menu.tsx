import { ReactNode } from 'react';
import { IconCategory, IconStar, IconSquareRoundedPlus } from '@tabler/icons-react';

interface FooterMenuItemType {
  id: string;
  renderIcon: ReactNode;
}

export const FooterMenus: FooterMenuItemType[] = [
  {
    id: 'categories',
    renderIcon: <IconCategory />,
  },
  {
    id: 'favorites',
    renderIcon: <IconStar />,
  },
  {
    id: 'addLink',
    renderIcon: <IconSquareRoundedPlus />,
  },
];
