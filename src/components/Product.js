import React, { useState, useEffect } from "react";
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
    const { actFetchProductsRequest } = props;
    const {AddCart} = props
    

  useEffect(() => {
    actFetchProductsRequest();
  },[]);

  const { _products } = props._products;
  if (_products.length > 0) {
    return (
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-md-12">
          <div className="row">
            {_products.map((item, index) => (
              <div
                key={index}
                className="col-md-2"
                style={{ marginBottom: "10px" }}
              >
                <img
                  src={item.image}
                  className="img-resposive"
                  style={{ width: "100%", height: 200 }}
                />
                <h5>{item.title}</h5>
                <h5>{item.price}</h5>
                <button
                  type="button"
                  className="btn btn-sm btn-primary mr-2"
                  title="Add to cart"
                  onClick={() => AddCart(item)}
                >
                  <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      <h2>Loading...!</h2>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
