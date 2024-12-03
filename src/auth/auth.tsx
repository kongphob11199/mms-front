import { Box } from '@mui/material';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../routes/route-path';
import { authGRPC } from '../api/gapi/auth.gapi';
import { getToken, logout } from '../utils/app-utils';

type AuthProps = {
  children: React.ReactNode;
};

const Auth = (props: AuthProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathPassToken = useMemo(() => [ROUTES_PATH.AUTH.ROOT, ROUTES_PATH.AUTH.LOGIN, ROUTES_PATH.AUTH.REGISTER], []);

  const onCheckTokenUser = useCallback(async () => {
    const token = getToken();
    if (!token) {
      if (!pathPassToken.some((item) => item === location.pathname)) {
        navigate(ROUTES_PATH.AUTH.LOGIN);
      }
    } else {
      await authGRPC.checkAuth().catch((error) => {
        logout();
        navigate(ROUTES_PATH.AUTH.LOGIN);
        return;
      });
      if (pathPassToken.some((item) => item === location.pathname)) {
        navigate(ROUTES_PATH.MAIN.HOME);
      }
    }
  }, [location.pathname, navigate, pathPassToken]);

  useEffect(() => {
    onCheckTokenUser();
  }, [onCheckTokenUser]);

  return <Box>{props.children}</Box>;
};

export default Auth;
