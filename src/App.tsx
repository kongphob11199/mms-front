import './App.css';
import { ThemeCustomProvider } from './theme/theme-context';
import Router from './routes/route';
import { BrowserRouter } from 'react-router-dom';
import Auth from './auth/auth';
import { HelmetProvider } from 'react-helmet-async';
import { AlertCustomProvider } from './components/alert/use-alert-custom';
import { Suspense } from 'react';
import { PageLoading } from './components/load/loading';
import { GlobalStyles } from '@mui/material';
import { navVars } from './theme/style/style-nav-vars';

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
            {/* <GlobalStyles styles={{ body: { ...navVars } }} /> */}
            <AlertCustomProvider>
              <Auth>
                <Suspense fallback={<PageLoading />}>
                  <Router />
                </Suspense>
              </Auth>
            </AlertCustomProvider>
          </ThemeCustomProvider>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
