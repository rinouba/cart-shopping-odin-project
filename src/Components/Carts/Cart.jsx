import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Cart({id,image,title,price,removeProduct,quantity,incrementQuantity,decrementQuantity,
}) {
  const [priced, setprice] = useState(price);

  useEffect(() => {
    setprice(price * quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <div className="flex bg-white w-full rounded-l-md mt-5 h-[200px] max-sm:w-72 text-center m-auto max-sm:h-max pb-3 max-sm:flex-col">
      <img
        src={image}
        alt={title}
        className="w-[250px] h-[200px] rounded-l-md max-md:w-1/4 max-xl:w-1/4 p-3 border-4 border-[#4E5DE2] max-sm:h-72 max-sm:w-full"
      />
      <div className="p-2 w-full flex justify-between h-max max-sm:flex-col ">
        <div className="p-5">
          <div className="text-[#4E5DE2] font-bold text-lg max-sm:text-sm max-lg:text-sm">
            {title}
          </div>
          <div className="text-red-500 font-bold text-base mt-6">{priced}$</div>
        </div>
        <div className="grid place-content-end place-content-between p-8 text-center  max-sm:p-0 max-sm:m-auto max-sm:items-center max-sm:p-0 max-sm:mx-auto max-sm:m-0">
          <div className="flex items-center">
            <button
              className="bg-[#17BB58] text-white w-[40px] h-[40px] text-4xl text-center mt-5 me-4 rounded hover:scale-110 transition ease-in-out delay-150 max-sm:text-sm"
              onClick={() => {
                incrementQuantity(id);
              }}
            >
              +
            </button>

            <button className="bg-[#4E5DE2] text-white w-[40px] h-[40px] text-2xl text-center me-4 mt-5 rounded max-sm:text-sm ">
              {quantity}
            </button>

            <button
              className="bg-[#F00000] text-white w-[40px] h-[40px] text-4xl text-center rounded mt-5 hover:scale-110 transition ease-in-out delay-150 max-sm:text-sm"
              onClick={() => {
                decrementQuantity(id);
              }}
            >
              -
            </button>
          </div>

          <button
            className="text-red-500 font-bold bg-[#4E5DE2] p-2 rounded-md text-white hover:scale-105 mt-5 transition ease-in-out delay-150 max-sm:mt-3"
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
