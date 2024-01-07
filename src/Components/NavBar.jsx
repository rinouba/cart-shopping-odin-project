import { NavLink } from "react-router-dom";
import { createContext } from "react";


function NavBar() {
  const CardContext = createContext(null)


  return (

    <nav className="p-5 bg-sky-800">
      <div className="w-2/4 flex justify-between m-auto">
        <NavLink
          className="border-solid border-2 border-sky-100 px-10 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:bg-sky-300 hover:text-black hover:scale-110 active:scale-110"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="border-solid border-2 border-sky-100 px-10 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:bg-sky-300 hover:text-black hover:scale-110 active:scale-110"
          to="shop"
        >
          Shop
        </NavLink>
        <CardContext.Provider value='test'>
        <NavLink
          className="border-solid border-2 border-sky-100 px-10 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:bg-sky-300 hover:text-black hover:scale-110 active:scale-110"
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
