import React, { useState } from 'react';

function Task4() {
  let [products, setProducts] = useState([
    {
      id: 1,
      title: "Zinger Burger",
      desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
      image: "burger.jpg",
      price: 520
    },
    {
      id: 2,
      title: "Twister",
      desc: "1 Twister + 1 Regular fries + 1 Regular drink",
      image: "twister.jpg",
      price: 520
    },
    {
      id: 3,
      title: "Wings",
      desc: "10 Pcs of our Signature Hot & Crispy Wings.",
      image: "wings.jpg",
      price: 520
    },
    {
      id: 4,
      title: "Family",
      desc: "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
      image: "family.jpg",
      price: 520
    }
  ]);

  const [counter, setCounter] = useState(0);
  const [totalprice, setTotalprice] = useState(0);

  const total = (index) => {
    setCounter((prevCounter) => prevCounter + 1);
    setTotalprice((prevTotal) => prevTotal + products[index].price);
  }

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1"> Cart({counter} | Rs. {totalprice}) </span>
        </div>
      </nav>

      <div className="row row-cols-1 row-cols-md-2 g-4 pt-5 pb-5">
        {products.map((product, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.desc}</p>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary" onClick={() => total(index)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Task4;
