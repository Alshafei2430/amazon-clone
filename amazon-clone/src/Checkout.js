import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/TM_Sandman_ILM_2x_650x45_FWT_V2._CB410487357_.jpg"
          alt=""
          className="checkout__ad"
        />
        {basket.length === 0 ? (
          <div>
            <h2>Your shopping basket is embty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            {/* list out all of the checkout products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
