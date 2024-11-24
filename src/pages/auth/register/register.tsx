import { Helmet } from 'react-helmet-async';
import RegisterSection from '../../../sections/auth/register/register-section';

const Register = () => {
  return (
    <>
      <Helmet>
        <title> Register | MMS</title>
      </Helmet>

      <RegisterSection />
    </>
  );
};

export default Register;
