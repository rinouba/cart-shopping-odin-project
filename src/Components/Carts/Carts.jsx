import { useContext, useState } from "react";
import { CardsContext } from "../../Router/Router";
import Quantity from "./Quantity";
import { useEffect } from "react";

function Carts() {
  const { cards } = useContext(CardsContext);
  const [cartsArr, setCartsArr] = useState([]);
  const uniqueIds = new Set();

  const removeProduct = (e) => {
    const cartsArrs = cartsArr.filter((elm) => {
      return elm.id !== e;
    });
    setCartsArr(cartsArrs);
  };

  useEffect(() => {
    for (const item of cards) {
      if (!uniqueIds.has(item.id)) {
        uniqueIds.add(item.id);
        setCartsArr((cur) => [...cur, item]);
      }
    }
  }, [cards]);

  return cartsArr ? (
    <div className="w-7/12 m-auto mt-10 rounded-l-md max-md:w-5/6">
      {cartsArr.map(({ id, image, title, price }) => {
        return (
          <div className="flex bg-white w-full rounded-l-md mt-5" key={id}>
            <img
              src={image}
              alt="test"
              className="w-5/12 rounded-l-md max-md:w-1/4 max-xl:w-1/4"
            />
            <div className="p-9 flex flex-col w-full border-l border-sky-400 border-l-4 border-b-4 ">
              <div className="text-sky-300 font-bold text-4xl max-md:text-base">
                {title}
              </div>
              <div className="text-red-500 font-bold text-xl mt-10 max-md:text-base">
                {price}$
              </div>
              <div className="mt-10">
                <Quantity />
              </div>
              <button
                className="quan-btn"
                onClick={() => {
                  removeProduct(id);
                }}
              >
                Remove Product
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="text-center text-white text-2xl mt-10">
      There is No Carts Here ...
    </div>
  );
}

export default Carts;
