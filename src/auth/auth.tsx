import { Box } from '@mui/material';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { KEY_STORAGE } from '../constants/common';
import { ROUTES_PATH } from '../routes/route-path';
import { authGRPC } from '../api/gapi/auth.gapi';
import { getToken } from '../utils/app-utils';

type AuthProps = {
  children: React.ReactNode;
};

const Auth = (props: AuthProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathPassToken = useMemo(() => [ROUTES_PATH.AUTH.ROOT, ROUTES_PATH.AUTH.LOGIN, ROUTES_PATH.AUTH.REGISTER], []);

  const onCheckTokenUser = useCallback(async () => {
    const token = getToken();
    if (!token && !pathPassToken.includes(location.pathname)) {
      navigate(ROUTES_PATH.AUTH.LOGIN);
    } else {
      await authGRPC
        .checkAuth()
        .then((res) => {
          console.log('222 res', res);
        })
        .catch((error) => {
          console.log('222 error', error);
        });
    }
  }, [location.pathname, navigate, pathPassToken]);

  useEffect(() => {
    onCheckTokenUser();
  }, [onCheckTokenUser]);

  return <Box>{props.children}</Box>;
};

export default Auth;
