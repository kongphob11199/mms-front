import { Helmet } from 'react-helmet-async';
import LoginSection from '../../../sections/auth/login/login-section';

const Login = () => {
  return (
    <>
      <Helmet>
        <title> Login | MMS</title>
      </Helmet>

      <LoginSection />
    </>
  );
};

export default Login;
