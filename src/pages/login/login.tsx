import { Helmet } from 'react-helmet-async';
import LoginSection from '../../sections/login/login-section';

type Props = {};

const Login = (props: Props) => {
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
