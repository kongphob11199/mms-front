import { Helmet } from 'react-helmet-async';
import HomeSection from '../../sections/home/home-section';

const Home = () => {
  return (
    <>
      <Helmet>
        <title> Home | MMS</title>
      </Helmet>

      <HomeSection />
    </>
  );
};

export default Home;
