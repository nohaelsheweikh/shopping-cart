import React, { Component } from "react";
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
  //  console.log(items)
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  function TotalPrice(price, quantity) {
    return Number(price * quantity).toLocaleString("en-US");
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {ListCart.map((item, key) => {
              return (
                <tr key={key}>
                  <td>
                    {" "}
                    <i onClick={() => DeleteCart(key)}>
                      <FontAwesomeIcon icon={faTrash} color="red" />
                    </i>
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <img
                      alt={item.title}
                      src={item.image}
                      style={{ width: "100px", height: "80px" }}
                    />
                  </td>
                  <td>{item.price} $</td>
                  <td>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => DecreaseQuantity(key)}
                    >
                      -
                    </span>
                    <span className="btn btn-info">{item.quantity}</span>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => IncreaseQuantity(key)}
                    >
                      +
                    </span>
                  </td>
                  <td>{TotalPrice(item.price, item.quantity)} $</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="5">Total Carts</td>
              <td>{Number(TotalCart).toLocaleString("en-US")} $</td>
            </tr>
          </tbody>
        </table>
        <a className="nav-item">
          <Link to="/checkout" className="nav-link">
            checkout{" "}
          </Link>
        </a>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    items: state._todoProduct,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Cart);
