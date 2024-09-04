import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { HelpDeskPage } from './pages/HelpDeskPage/HelpDeskPage';
import { CitizenListPage } from './pages/CitizenListPage/CitizenListPage';
import { MainPage } from './pages/MainPage/MainPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/citizenslist",
    element: <CitizenListPage/>,
  },
  {
    path: "/helpdesk",
    element: <HelpDeskPage/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
