import CardShop from "./CardShop";
import { useContext, useEffect, useState } from "react";
import Loading from "../Loading";
import { CardsContext } from "../../Router/Router";

function Shop() {
  const { cards, setcards } = useContext(CardsContext);

  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => {
        const cardsWithQuantity = json.map((card) => ({
          ...card,
          quantity: 1,
        }));
        setData(cardsWithQuantity);
        setloading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (e) => {
    setcards([...cards, e]);
  };

  return loading ? (
    <>
      <div className="flex justify-center w-3/4 m-auto flex-wrap my-16 max-md:w-full md:my-10">
        {data &&
          data.map((card) => {
            return (
              <CardShop
                card={card}
                key={card.id}
                title={card.title}
                price={card.price}
                image={card.image}
                keyz={card.id}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Shop;
