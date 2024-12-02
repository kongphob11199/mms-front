export const ROUTES = {
  MAIN: {
    ROOT: '',
    HOME: 'home',
  },
  AUTH: {
    ROOT: 'auth',
    LOGIN: 'login',
    REGISTER: 'register',
  },
};

export const ROUTES_PATH = {
  MAIN: {
    ROOT: `/${ROUTES.MAIN.ROOT}`,
    HOME: `/${ROUTES.MAIN.HOME}`,
  },
  AUTH: {
    ROOT: `/${ROUTES.AUTH.ROOT}`,
    LOGIN: `/${ROUTES.AUTH.ROOT}/${ROUTES.AUTH.LOGIN}`,
    REGISTER: `/${ROUTES.AUTH.ROOT}/${ROUTES.AUTH.REGISTER}`,
  },
};
