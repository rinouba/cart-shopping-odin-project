import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { createContext, useState  } from "react";
// Components
import Home from "../Components/MainPages/Home";
import Shop from "../Components/Shop/Shop";
import Carts from "../Components/Carts/Carts";
import ErrorPage from "../Error/ErrorPage";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

// use context
export const CardsContext = createContext(null);


const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};


const Router = () => {
  const [cards, setcards] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <CardsContext.Provider value={{ cards, setcards }}>
                  <AppLayout />
          </CardsContext.Provider>
      ),
      errorElement: <ErrorPage />,
      children: [
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
