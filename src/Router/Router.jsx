import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../Components/Home"
import Shop from "../Components/Shop"
import Carts from "../Components/Carts"
import ErrorPage from "../Error/ErrorPage";
import NavBar from "../Components/NavBar";
import { useState } from "react";

const AppLayout = () => { 
  const [singleCard, setSingleCard] = useState(null);
  const [cards, setcards] = useState([]);


  return(
    <>
    <NavBar />
    <Outlet context={[singleCard,setSingleCard,cards,setcards]}/>
    </>
  )
 }

const Router = () => {


  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "carts",
          element: <Carts />,
        },
      ]
    },

  ]);

  return (
      <RouterProvider router={router} />

  )
};

export default Router;