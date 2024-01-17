import { NavLink } from "react-router-dom";
import { CardsContext } from "../Router/Router";
import { useContext } from "react";

function NavBar() {
  const { cards } = useContext(CardsContext);

  return (
    <nav className="py-7 bg-[#4E5DE2]">
      <div className=" flex justify-between m-auto max-md:items-center max-sm:flex-col max-md:w-full text-center">
        <h1 className="text-white text-2xl font-bold ml-10 max-sm:ml-0">
          Store
        </h1>
        <div className="flex max-sm:flex-col">
          <NavLink
            className="max-md:mt-5 me-5 px-5 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:text-black hover:scale-110 active:scale-110 max-sm:px-0 max-sm:me-0"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className="max-md:mt-5 me-5 px-5 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:text-black hover:scale-110 active:scale-110 max-sm:px-0 max-sm:me-0"
            to="shop"
          >
            Shop
          </NavLink>
        </div>

        <NavLink
          className="max-md:mt-5 mr-10 p-1 text-lg font-bold delay-150 duration-300 ease-in-out text-white hover:text-black hover:scale-110 active:scale-110 max-sm:mr-0"
          to="carts"
        >
          🛒 {cards.length}
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
