import IconHome from '../assets/icon/icon-home';
import IconSetting from '../assets/icon/icon-setting';
import { ROUTES_PATH } from '../routes/route-path';
import { IconProps } from './icon';

export const MAIN_MENU = {
  HOME: {
    text: 'MENU.HOME',
    path: ROUTES_PATH.MAIN.HOME,
    icon: (style: IconProps) => <IconHome {...style} />,
  },
  SETTINGS: {
    text: 'MENU.SETTINGS',
    path: ROUTES_PATH.MAIN.SETTINGS,
    icon: (style: IconProps) => <IconSetting {...style} />,
  },
};
