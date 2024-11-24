import { useEffect } from 'react';
import './App.css';
import { userGRPC } from './api/gapi/user.gapi';
import { CreateUserCustomerRequest } from './proto/user_pb';
import { Gender } from './proto/enum_pb';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { ThemeCustomProvider } from './theme/theme-context';
import Router from './routes/route';
import { BrowserRouter } from 'react-router-dom';
import dayjs from 'dayjs';
import Auth from './auth/auth';
import { HelmetProvider } from 'react-helmet-async';
import { AlertCustomProvider } from './components/alert/use-alert-custom';

function App() {
  const loadUser = async () => {
    await userGRPC
      .findAll()
      .then((data) => {
        console.log(data);
        data.usersList.forEach((item) => {
          if (item.birthday) {
            const formattedDate = dayjs.unix(item.birthday.seconds).format('YYYY-MM-DD');
            console.log('222 formattedDate', formattedDate);
          }
        });
      })
      .catch((error) => {
        console.error('222 Error:', error);
      });
  };

  const createCustomer = async () => {
    const req = new CreateUserCustomerRequest();
    req.setFirstname('test-f-1');
    req.setLastname('test-l-1');
    req.setGender(Gender.MALE);

    const birthdayDate = dayjs('2024-11-10');
    const birthdayTimestamp = new Timestamp();
    birthdayTimestamp.setSeconds(birthdayDate.unix());
    birthdayTimestamp.setNanos(birthdayDate.millisecond() * 1e6);

    req.setBirthday(birthdayTimestamp);
    console.log('222 birthdayTimestamp', birthdayTimestamp);
    // await userGRPC
    //   .createUserCustomer(req)
    //   .then((data) => {
    //     console.log(data); // Handle successful response
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error); // Handle error
    //   });
  };

  useEffect(() => {
    // loadUser();
    // createCustomer();
  }, []);

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeCustomProvider>
            <AlertCustomProvider>
              <Auth>
                <Router />
              </Auth>
            </AlertCustomProvider>
          </ThemeCustomProvider>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
