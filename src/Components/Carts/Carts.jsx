import { useContext } from "react";
import { CardsContext } from "../../Router/Router";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import TotalPrice from "./TotalPrice";
function Carts() {
  const { cards, setcards } = useContext(CardsContext);
  const uniqueIds = new Set();

  const removeProduct = (e) => {
    const cartsArrs = cards.filter((elm) => {
      return elm.id !== e;
    });
    setcards(cartsArrs);
  };

  const incrementQuantity = (cardId) => {
    setcards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, quantity: card.quantity + 1 } : card
      )
    );
  };

  const decrementQuantity = (cardId) => {
    setcards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId && card.quantity > 1
          ? { ...card, quantity: card.quantity - 1 }
          : card
      )
    );
  };

  return cards.length ? (
    <div className="w-7/12 m-auto my-24 rounded-l-md max-md:w-5/6 md:my-16">
      {cards.map(({ id, image, title, price, quantity }) => {
        if (!uniqueIds.has(id)) {
          uniqueIds.add(id);
          return (
            <Cart
              key={id}
              id={id}
              image={image}
              title={title}
              price={price}
              quantity={quantity}
              removeProduct={removeProduct}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          );
        }
        return null;
      })}
      <TotalPrice />
    </div>
  ) : (
    <div className="w-full h-screen text-center text-black text-2xl mt-10 font-bold">
      There is No Carts Here ... <br />
      Add Cart From Here {" > "}
      <Link to="/shop" className="underline text-white">
        Shop!
      </Link>
    </div>
  );
}

export default Carts;
