import React from "../../../node_modules/react";
import "./style.css";

function Products(props) {
  let floatr = {
    float: "right"
  };
  return (
    <div className="container-product">
      <div data-price={props.dataprice1} className={props.class1}>
        <div data-price={props.dataprice2} className={props.class2} />
        <div className="text-space">
          <b>{props.name}</b>
          <p>
            {props.description}
            <br />
            {props.colors}
            <i style={floatr}>{props.price}</i>
          </p>
        </div>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default Products;
