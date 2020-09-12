import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import uuid from "react-uuid";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  const transitions = useTransition(basket, (item) => item.key, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-40px,0)" },
  });
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/TM_Sandman_ILM_2x_650x45_FWT_V2._CB410487357_.jpg"
          alt=""
          className="checkout__ad"
        />
        {/* <h3>hello {user.email}</h3> */}
        {basket.length === 0 ? (
          <div>
            <h2>Your shopping basket is embty</h2>
          </div>
        ) : (
          <div style={{ position: "relative" }}>
            <h2 className="checkout__title">Your shopping basket</h2>
            {/* <FlipMove
              staggerDurationBy="30"
              duration={500}
              enterAnimation={enterLeaveAnimation}
              leaveAnimation={enterLeaveAnimation}
              typeName={null}
            > */}
            {basket?.map((item) => (
              <CheckoutProduct
                key={uuid()}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            {/* </FlipMove> */}
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
