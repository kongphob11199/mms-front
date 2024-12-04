import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useThemeCustom } from '../../theme/theme-context';
import { Box, IconButton, Typography, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { adjustOpacity } from '../../utils/color-utils';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { MAIN_MENU } from '../../constants/menu';
import ButtonCustom from '../../components/button/button-custom';
import useClickOutSide from '../../utils/use-clickoutside';
import useWindowSize from '../../utils/use-windowsize';

interface MainNavMenuProps {
  isOpenNav: boolean;
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainNavMenu = (props: MainNavMenuProps) => {
  const { t } = useTranslation();
  const { colors } = useThemeCustom();
  const { width } = useWindowSize();
  const location = useLocation();
  const navigate = useNavigate();

  const { isOpenNav, setIsOpenNav } = props;
  const [menuCurrent, setMenuCurrent] = useState<string>(location.pathname);

  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutSide({
    condition: width < 1200 && isOpenNav,
    ref: menuRef,
    handler: () => {
      setIsOpenNav(false);
    },
  });

  const handleGotoPath = (path: string) => {
    navigate(path);
    if (width && width < 1200) {
      setIsOpenNav(false);
    }
  };

  useEffect(() => {
    setMenuCurrent(location.pathname);
  }, [location.pathname]);

  const renderNavMenuItemStyle = useCallback(() => {
    if (!isOpenNav) {
      return {
        '.nav-menu-item': {
          flexDirection: 'column',
          svg: {
            width: '24px',
            height: '24px',
          },
          '.MuiTypography-root': {
            textAlign: 'center',
            fontSize: '12px ',
          },
        },
      };
    } else {
      return {};
    }
  }, [isOpenNav]);

  return (
    <Box
      ref={menuRef}
      position="fixed"
      width={{ lg: `${isOpenNav ? 'var(--layout-nav-width)' : 'var(--layout-nav-width-cs)'}`, sm: `${isOpenNav ? 'var(--layout-nav-width)' : '0'}`, xs: '100%' }}
      height={{ lg: 'calc(100vh - var(--layout-nav-height))', xs: '100%' }}
      bottom="0"
      left={{ lg: `0`, sm: `${isOpenNav ? '0px' : 'var(--layout-nav-width-cs-sm)'}`, xs: `${isOpenNav ? '0px' : 'var(--layout-nav-width-cs-xs)'}` }}
      bgcolor={{ lg: 'var(--layout-nav-bg)', xs: 'var(--layout-nav-bg-xs)' }}
      boxShadow={colors.bs_2}
      sx={{ transition: 'width 0.2s ease-in-out, left 0.2s ease-in-out' }}
    >
      <Box
        display={{ lg: 'block', xs: `${isOpenNav ? 'block' : 'none'}` }}
        width={'100%'}
        height={'100%'}
        padding={{ lg: isOpenNav ? '16px' : '16px 8px', xs: '8px 16px' }}
        position={'relative'}
        sx={{
          transition: 'padding 0.2s ease-in-out',
          ...renderNavMenuItemStyle(),
          '.menu-item-active': {
            backgroundColor: adjustOpacity(colors.primary_500, 0.08),
          },
        }}
      >
        <Box display={{ lg: 'none', xs: 'block' }} marginBottom="18px">
          <Box display="flex" alignItems="center" gap="16px">
            <Box>
              <IconButton onClick={() => setIsOpenNav(!isOpenNav)}>
                <MenuIcon sx={{ color: colors.text, fontSize: '25px' }} />
              </IconButton>
            </Box>
            <Box>MMS</Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="8px">
          {Object.entries(MAIN_MENU).map(([key, value]) => {
            return (
              <ListMenuItem key={key} className={`nav-menu-item ${value.path === menuCurrent ? 'menu-item-active' : ''}`} variant="text" onClick={() => handleGotoPath(value.path)}>
                {value.icon({ width: '30px', height: '30px', fill: colors.primary_300 })}
                <Typography className="text-overflow-ellipsis" width="100%">
                  {t(`${value.text}`)}
                </Typography>
              </ListMenuItem>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default MainNavMenu;

const ListMenuItem = styled(ButtonCustom)(({ theme }) => {
  const { colors } = useThemeCustom();
  return {
    padding: '8px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px 16px',
    flexDirection: 'row',
    '.MuiTypography-root': {
      textAlign: 'left',
    },
    svg: {
      width: '30px',
      height: '30px',
      fill: colors.primary_300,
    },
    transition: 'background-color 0.15s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: adjustOpacity(colors.primary_500, 0.15),
    },
  };
});
