// eslint-disable-next-line react/prop-types
function CardShop({ card, keyz, title, price, image, handleClick }) {
  return (
    <div
      className="overflow-clip rounded-lg bg-white shadow w-3/12 h-3/12 mx-3 mt-5 max-md:w-2/4"
      key={keyz}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center mb-5"
        />
      </div>
      <div className="p-5 border-t-4">
        <h3 className="font-medium text-gray-900">Title : {title}</h3>
        <h3 className="text-sm font-medium text-gray-900">Price : ${price}</h3>
      </div>
      <div className="text-center mb-5">
        <button
          className="border-solid border-2 border-sky-300 px-10 text-lg font-bold delay-150 duration-300 ease-in-out text-black hover:bg-sky-300 hover:text-white hover:scale-110 active:scale-110"
          onClick={() => {
            handleClick(card);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default CardShop;
