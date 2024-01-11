import { useState } from "react";


// eslint-disable-next-line react/prop-types
function Quantity() {
  const [quantites, setQuantity] = useState(1);

  const incress = () => { 
    setQuantity(quantites+1)
   }
   const decress = () => {
    quantites <= 1 ? setQuantity(1) : setQuantity(quantites-1)
  };

  return (
      <>
        <button className="quan-btn" onClick={() => { incress() }}>+</button>
        <button className="quan-btn">{quantites}</button>
        <button className="quan-btn" onClick={() => { decress() }}>-</button>
    </>
  )
}

export default Quantity