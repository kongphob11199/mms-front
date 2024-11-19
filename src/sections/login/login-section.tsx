import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useThemeCustom } from '../../theme/theme-context';
import InputCustom from '../../components/input/input-custom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ButtonCustom from '../../components/button/button-custom';

import { adjustOpacity } from '../../uitls/color-uitls';

type Props = {};

const LoginSection = (props: Props) => {
  const { t } = useTranslation();
  const { colors, handleChangeTheme } = useThemeCustom();

  const [isHidePassword, setIsHidePassword] = useState<boolean>(true);
  return (
    <Box width="100%" height="100%" display="flex">
      <Box width={{ md: '30%', xs: '0' }} height="100%" bgcolor={colors.bgSub} boxShadow={colors.bs_2} sx={{ transition: 'width 0.2s ease-in-out' }}>
        <Box
          display={{ md: 'block', xs: 'none' }}
          position="relative"
          height="100%"
          width="100%"
          overflow="hidden"
          sx={{ img: { width: '150%', height: '150%', objectFit: 'cover', objectPosition: 'center' } }}
        >
          <Box bgcolor={adjustOpacity(colors.black, 0.2)} sx={{ transition: 'background-color 0.2s ease-in-out' }} color={'#000000'} position="absolute" height="100%" width="100%" />
        </Box>
      </Box>
      <Box width={{ md: '70%', xs: '100%' }} height="100%" alignContent="center" padding="16px">
        <Box
          maxWidth="480px"
          width="100%"
          height="fit-content"
          margin="auto"
          padding="48px 32px"
          display="flex"
          flexDirection="column"
          gap="24px"
          bgcolor={colors.bgSub}
          borderRadius="12px"
          boxShadow={colors.bs_3}
        >
          <Box marginBottom="16px">
            <Typography variant="h5">{t('เข้าสู่ระบบ')}</Typography>
          </Box>
          <Box>
            <InputCustom fullWidth label={t('บัญชีผู้ใช้')} />
          </Box>
          <Box>
            <InputCustom
              fullWidth
              label={t('รหัสผ่าน')}
              type={isHidePassword ? 'password' : 'text'}
              endadornment={
                <IconButton sx={{ color: colors.text, padding: 0 }} onClick={() => setIsHidePassword(!isHidePassword)}>
                  {isHidePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              }
            />
          </Box>
          <Box marginTop="16px">
            <ButtonCustom fullWidth onClick={() => handleChangeTheme()} btnshadow="btn-shadow-better" sx={{ fontSize: '17px' }}>
              {t('เข้าสู่ระบบ')}
            </ButtonCustom>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginSection;
