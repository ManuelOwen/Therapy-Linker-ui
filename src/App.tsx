import {   RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Department from "./pages/Department";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import AppointmentForm from "./pages/appointment";
// import Footer from "./components/Footer";
import Error from "./pages/Error";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<Error/>
  },
  {
    path: "/appointment",
    element: <AppointmentForm />,
    errorElement:<Error/>
  },
  {
    path: "/about",
    element: <About />,
    errorElement:<Error/>
  },
  {
    path: "/department",
    element: <Department />,
    errorElement:<Error/>

  },
  {
    path: "/doctors",
    element: <Doctors />,
    errorElement:<Error/>
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement:<Error/>
  },

]);
function App(){
  return<RouterProvider router={router}/>
}
export default App;


