import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import RealTime from './pages/realTime.tsx';
import SleepTracker from './pages/sleepTracker.tsx';
import UserInfo from './pages/userInfo.tsx';
import Landing from './pages/Landing.tsx';
import Education from './pages/Education.tsx';
import NotFound from './pages/Notfound.tsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/realtime",
        element: <RealTime />,
      },
      {
        path: "/sleeptracker",
        element: <SleepTracker />,
      },
      {
        path: "/userinfo",
        element: <UserInfo />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
