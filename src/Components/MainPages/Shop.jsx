import CardShop from "../CardShop";
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
        setData(json);
        setloading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (e) => {
    setcards([...cards, e]);
  };

  return loading ? (
    <>
      <div className="flex justify-center mt-5"></div>
      <div className="flex justify-evenly w-3/4 m-auto flex-wrap mt-10 max-md:w-full">
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
