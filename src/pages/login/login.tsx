import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useThemeCustom } from '../../theme/theme-context';
import { useTranslation } from 'react-i18next';
import InputCustom from '../../components/input/input-custom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ButtonCustom from '../../components/button/button-custom';

type Props = {};

const Login = (props: Props) => {
  const { t } = useTranslation();
  const { colors } = useThemeCustom();

  const [isHidePassword, setIsHidePassword] = useState<boolean>(true);

  return (
    <Box width="100%" height="100%" display="flex">
      <Box width={{ md: '30%', xs: '0' }} height="100%" bgcolor={colors.bgSub} sx={{ transition: 'width 0.2s ease-in-out' }}>
        <Box display={{ md: 'block', xs: 'none' }}>asdada</Box>
      </Box>
      <Box width={{ md: '70%', xs: '100%' }} height="100%" alignContent="center">
        <Box maxWidth="420px" width="100%" height="fit-content" margin="auto" padding="0 16px" display="flex" flexDirection="column" gap="24px">
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
              endAdornment={
                <IconButton sx={{ color: colors.text, padding: 0 }} onClick={() => setIsHidePassword(!isHidePassword)}>
                  {isHidePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              }
            />
          </Box>
          <Box marginTop="16px">
            <ButtonCustom fullWidth>{t('เข้าสู่ระบบ')}</ButtonCustom>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
