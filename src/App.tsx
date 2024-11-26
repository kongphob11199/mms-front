import './App.css';
import { ThemeCustomProvider } from './theme/theme-context';
import Router from './routes/route';
import { BrowserRouter } from 'react-router-dom';
import Auth from './auth/auth';
import { HelmetProvider } from 'react-helmet-async';
import { AlertCustomProvider } from './components/alert/use-alert-custom';

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
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
