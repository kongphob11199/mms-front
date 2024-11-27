import { Box } from '@mui/material';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { KEY_STORAGE } from '../constants/common';
import { ROUTES_PATH } from '../routes/route-path';

type AuthProps = {
  children: React.ReactNode;
};

const Auth = (props: AuthProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathPassToken = useMemo(() => [ROUTES_PATH.AUTH.ROOT, ROUTES_PATH.AUTH.LOGIN, ROUTES_PATH.AUTH.REGISTER], []);

  const onCheckTokenUser = useCallback(() => {
    const token = localStorage.getItem(KEY_STORAGE.TOKEN) || null;
    if (!token && !pathPassToken.includes(location.pathname)) {
      navigate(ROUTES_PATH.AUTH.LOGIN);
    }
  }, [location.pathname, navigate, pathPassToken]);

  useEffect(() => {
    onCheckTokenUser();
  }, [onCheckTokenUser]);

  return <Box>{props.children}</Box>;
};

export default Auth;
