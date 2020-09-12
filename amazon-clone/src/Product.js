import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import uuid from "react-uuid";

function Product({ id, title, image, rating, price }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    //add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        price: price,
        title: title,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div key={uuid()} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p key={uuid()}>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
