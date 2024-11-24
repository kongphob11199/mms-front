export const ROUTES = {
  AUTH: {
    ROOT: 'auth',
    LOGIN: 'login',
    REGISTER: 'register',
  },
};

export const ROUTES_PATH = {
  AUTH: {
    ROOT: `/${ROUTES.AUTH.ROOT}`,
    LOGIN: `/${ROUTES.AUTH.ROOT}/${ROUTES.AUTH.LOGIN}`,
    REGISTER: `/${ROUTES.AUTH.ROOT}/${ROUTES.AUTH.REGISTER}`,
  },
};
