import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
function Cart({ id, image, title, price, removeProduct , quantity , incrementQuantity , decrementQuantity}) {
  const [priced, setprice] = useState(price);

  useEffect(() => {
    setprice(price * quantity);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);


  return (
    <div className="flex bg-white w-full rounded-l-md mt-5 h-45">
      <img
        src={image}
        alt={title}
        className="w-3/12 rounded-l-md max-md:w-1/4 max-xl:w-1/4"
      />
      <div className="p-2 w-full border-l border-sky-400 border-l-4 border-b-4 flex justify-between items-center h-full">
        <div>
          <div className="text-sky-300 font-bold text-lg">{title}</div>
          <div className="text-red-500 font-bold text-base mt-6">{priced}$</div>
        </div>
        <div>
          <div className="mt-5">
            <button
              className="quan-btn"
              onClick={() => {
                incrementQuantity(id)
              }}
            >
              +
            </button>
            <button className="quan-btn">{quantity}</button>
            <button
              className="quan-btn"
              onClick={() => {
                decrementQuantity(id)
              }}
            >
              -
            </button>
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
    </div>
  );
}

export default Cart;
