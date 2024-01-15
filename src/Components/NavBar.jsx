import { NavLink } from "react-router-dom";
import {CardsContext} from '../Router/Router'
import { useContext } from "react";

function NavBar() {

  const {cards} = useContext(CardsContext)

  return (
    <nav className="p-5 bg-sky-800">
      <div className="w-2/4 flex justify-center m-auto max-md:justify-center max-md:flex-col max-md:w-full">
        <NavLink
          className="max-md:mt-5 me-5 border-solid border-2 border-sky-100 px-10 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:bg-sky-300 hover:text-black hover:scale-110 active:scale-110"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="max-md:mt-5 me-5 border-solid border-2 border-sky-100 px-10 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:bg-sky-300 hover:text-black hover:scale-110 active:scale-110"
          to="shop"
        >
          Shop
        </NavLink>
          <NavLink
            className="max-md:mt-5 me-5 border-solid border-2 border-sky-100 px-10 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:bg-sky-300 hover:text-black hover:scale-110 active:scale-110"
            to="carts"
          >
            Carts {cards.length}
          </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
