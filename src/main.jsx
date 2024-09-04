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
    path: "/npc_irs_test",
    element: <MainPage/>,
  },
  {
    path: "/npc_irs_test/citizenslist",
    element: <CitizenListPage/>,
  },
  {
    path: "/npc_irs_test/helpdesk",
    element: <HelpDeskPage/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
