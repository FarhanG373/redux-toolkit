import React, { useEffect } from "react";
import "./component.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../Store/CartSlice";
import { getProduct } from "../Store/ProductSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data = [], status } = useSelector((state) => state.products);
  let card;

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(addCart(product));
  };

  if (status === "loading") {
    card = <div>Loading...</div>;
  } else if (status === "ideal") {
    card = data.map((item, index) => {
      const { title, description, image } = item;
      return (
        <div key={index} className="card">
          <div className="cardImage">
            <img src={image} alt={title} />
          </div>
          <div className="cardContent">
            <div className="cardHeading">{title}</div>
            <p>{description}</p>
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        </div>
      );
    });
  } else {
    card = <div>Error loading products</div>;
  }

  return <div className="wrap">{card}</div>;
};

export default Product;