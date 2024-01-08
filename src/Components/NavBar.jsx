import { NavLink } from "react-router-dom";
import { createContext } from "react";

function NavBar() {
  const CardContext = createContext(null);

  return (
    <nav className="p-5 bg-sky-800 w-full">
      <div className="w-2/4 flex m-auto  max-md:justify-center max-md:flex-col max-md:w-full">
        <NavLink
          className="max-md:mt-5 border-solid border-2 border-sky-100 px-10 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:bg-sky-300 hover:text-black hover:scale-110 active:scale-110"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="max-md:mt-5 border-solid border-2 border-sky-100 px-10 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:bg-sky-300 hover:text-black hover:scale-110 active:scale-110"
          to="shop"
        >
          Shop
        </NavLink>
        <CardContext.Provider value="test">
          <NavLink
            className="max-md:mt-5 border-solid border-2 border-sky-100 px-10 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:bg-sky-300 hover:text-black hover:scale-110 active:scale-110"
            to="carts"
          >
            Carts
          </NavLink>
        </CardContext.Provider>
      </div>
    </nav>
  );
}

export default NavBar;
