import { useContext } from "react";
import { CardsContext } from "../../Router/Router";

function TotalPrice() {
  const { cards } = useContext(CardsContext);
  const totalPrice = cards.reduce(
    (total, card) => total + card.price * card.quantity,
    0
  );

  return (
    <div className="text-black text-2xl text-center font-bold my-5">
      Total Price : <span className="text-[#894EE2]">{totalPrice + "$"}</span>
      <br />
      <button className="bg-[#894EE2] px-8 py-3 text-white mt-3 rounded hover:text-black hover:bg-[#D9D9D9] hover:border-2 border-[#894EE2] transition ease-in-out delay-150">
        Checkout
      </button>
    </div>
  );
}

export default TotalPrice;
