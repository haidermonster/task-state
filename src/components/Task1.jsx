import React from 'react'
import { useState } from 'react';
function Task1() {
    let [product, setProduct] = useState({
        id: 101,
        title: "Krunch Combo",
        desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
        image: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
        price: 520
    });
    
      const [counter, setCounter] = useState(0);
    
      const [totalprice, setTotalprice] = useState(0);
    
    const total=()=>{
      setCounter(counter+1)
    setTotalprice(totalprice+product.price);
    }
    
  return (
    <>
  
  <div className="container my-5">       <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
           <span className="navbar-brand mb-0 h1">
             Cart({counter} | Rs. {totalprice}) </span>
         </div>
       </nav>

       <div className="card" style={{ width: "18rem" }}>
         <img src={product.image} className="card-img-top" alt={product.title} />
         <div className="card-body">
           <h5 className="card-title"> {product.title} </h5>
           <p className="card-text">{product.desc}</p>
           <h5>Rs. {product.price}</h5>
           <button className="btn btn-primary" onClick={total}>Add to Cart</button>
         </div>
       </div>
    </div>
 
    </>
  )
}

export default Task1