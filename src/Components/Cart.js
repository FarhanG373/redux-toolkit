import React from "react";
import "./component.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Store/CartSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useNavigate();
  const remove = (product) => {
    if (productCart.length > 1) {
      dispatch(removeFromCart(product));
    } else {
      history("/");
    }
  };
  return (
    <div>
      {productCart.map((item, index) => {
        const { title, description, image } = item;
        return (
          <div key={index} className="card">
            <div className="cardImage">
              <img src={image} alt={title} />
            </div>
            <div className="cardContent">
              <div className="cardHeading">{title}</div>
              <p>{description}</p>
              <button onClick={() => remove(item)}>Remove from cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
