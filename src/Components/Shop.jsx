import CardShop from "./CardShop";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useOutletContext } from "react-router-dom";




function Shop() {
  const [,setSingleCard,cards,setcards] = useOutletContext();

  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
    .then(res=>res.json())
    .then(json=>
        {
          setData(json)
          setloading(true)
        }
      ).catch(err=>console.log(err))

  }, []);

  const handleClick = (e) => {
    setcards([...cards,e])
  }
  cards&&setSingleCard(cards)


  
  return (
      loading?    <>
      <div className="flex justify-center mt-5">
      </div> 
      <div className="flex justify-evenly w-3/4 m-auto flex-wrap mt-10">
      {data&&data.map((card) => {
        return (<CardShop card={card} key={card.id} title={card.title} price={card.price} image={card.image} keyz={card.id} handleClick={handleClick}/>  )  
      })}    
      </div>
  </>: <Loading />
  );
}

export default Shop;
