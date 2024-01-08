import { useOutletContext } from "react-router-dom";

function Carts() {
  const [cards] = useOutletContext();
  return cards ? (
    <div className="w-7/12 m-auto mt-10 rounded-l-md max-md:w-5/6">
      {cards.map((card) => {
        return (
          <div className="flex bg-white w-full rounded-l-md mt-5" key={card.id}>
            <img
              src={card.image}
              alt="test"
              className="w-5/12 rounded-l-md max-md:w-1/4 max-xl:w-1/4"
            />
            <div className="p-9 flex flex-col w-full border-l border-sky-400 border-l-4 border-b-4 ">
              <div className="text-sky-300 font-bold text-4xl max-md:text-base">
                {card.title}
              </div>
              <div className="text-red-500 font-bold text-xl mt-5 max-md:text-base">
                {card.price}$
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="text-center text-white text-2xl mt-10">
      Not Cards Here ...
    </div>
  );
}

export default Carts;
