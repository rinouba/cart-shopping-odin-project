import { useContext } from "react";
import { CardsContext } from "../../Router/Router";

function TotalPrice() {
  const {cards} = useContext(CardsContext)
  const totalPrice = cards.reduce((total, card) => total + card.price * card.quantity, 0);

  return (
    <div className="underline text-white text-2xl text-center mt-5">Total : <span className="text-red-500">{
      totalPrice + "$"
    }</span></div>
  )
}

export default TotalPrice