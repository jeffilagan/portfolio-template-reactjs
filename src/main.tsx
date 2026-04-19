import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss';
import Layout from './layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home';
import ServicesPage from './pages/services';
import ResumePage from './pages/resume';
import WorkPage from './pages/work';
import ContactPage from './pages/contact';
import { AppContextProvider } from './components/context/app.context';
import './i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
      {
        path: "/work",
        element: <WorkPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ]
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>,
)