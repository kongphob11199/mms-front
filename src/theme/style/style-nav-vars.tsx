import { adjustOpacity } from '../../utils/color-utils';
import { ThemeColors } from '../color';
import { useThemeCustom } from '../theme-context';

export const navVars = (colors: ThemeColors) => {
  const openMenu = '300px';
  const closeMenu = '100px';

  const closeMenu_sm = '-300px';
  const closeMenu_xs = '100%';

  const height = '57px';

  return {
    'layout-nav-bg': adjustOpacity(colors.bgMenu, 0.45),
    'layout-nav-bg-xs': colors.bgMenu,
    //
    'layout-nav-width': `${openMenu}`,
    'layout-nav-width-cs': `${closeMenu}`,
    'layout-nav-width-cs-sm': `${closeMenu_sm}`,
    'layout-nav-width-cs-xs': `${closeMenu_xs}`,
    //
    'layout-nav-height': `${height}`,
  };
};
