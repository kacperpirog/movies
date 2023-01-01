import React, { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "First",
    price: 200,
  },
  {
    id: 2,
    name: "Second",
    price: 150,
  },
  {
    id: 3,
    name: "Third",
    price: 300,
  },
];

const ShopEx = () => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const addToCart = (id) => {
    const selectProduct = products.find((product) => product.id === id);
    setCart([...new Set([...cart, selectProduct])]);
  };

  const deleteProduct = (id) => {
    const filteredProduct = cart.filter((product) => product.id !== id);
    setCart(filteredProduct);
  };

  useEffect(() => {
    calculate();
  }, [cart]);

  const calculate = () => {
    let tempTotal = 0;

    cart.forEach((product) => {
      tempTotal = product.price + tempTotal;
    });
    setPrice(tempTotal);
  };

  // [1,1,1,2,2,2] ---> new Set([1,1,1,2,2,2]) ----> new Set(1,2) ---> [new Set(1,2)] ---> [...new Set(1,2)] ----> [1,2]

  return (
    <>
      <h1>Products: </h1>
      <ul>
        {products.map((product) => {
          const { id, name, price } = product;
          return (
            <li key={id}>
              <h5>{name}</h5>
              <h4>{price}</h4>
              <button onClick={() => addToCart(id)}>add</button>
            </li>
          );
        })}
      </ul>
      <p>------------------------</p>
      <h1>Cart:</h1>
      <ul>
        {cart.map((product) => {
          const { id, name, price } = product;
          return (
            <li key={id}>
              <h5>{name}</h5>
              <h4>{price}</h4>
              <button onClick={() => deleteProduct(id)}>delete</button>
            </li>
          );
        })}
      </ul>
      <h4>Cart total: {price} $</h4>
    </>
  );
};

export default ShopEx;
