import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import './cart.css';
import Payment from "../../Components/Payment/Payment";
import { CartContext } from '../../Modules/Cart/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalItems } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "55vh" }}>
        <h1 className="fs-1">Cart is empty!</h1>
      </div>
    );
  }

  console.log("Cart Before Checkout:", localStorage.getItem("cart"));

  
  return (
    <div className="container mt-4">
      <div className="row shadow my-4">
        {/* Left Section: Cart Details */}
        <div className="col-lg-9 col-md-8 bg-white px-4 py-4">
          <div className="d-flex justify-content-between border-bottom pb-3">
            <h1 className="fw-semibold fs-4">Shopping Cart</h1>
            <h2 className="fw-semibold fs-4">{totalItems} Items</h2>
          </div>

          {/* Cart Items */}
          {cart.map((item) => (
            <div className="row align-items-center hover-shadow px-3 py-3 border-bottom" key={item.id}>
              {/* Product Image */}
              <div className="col-md-2 col-4">
                <img
                  className="img-fluid"
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100px", height: "100px", objectFit: "contain" }}
                />
              </div>

              {/* Product Details */}
              <div className="col-md-4 col-8">
                <span className="fw-bold d-block">{item.title}</span>
                <span className="text-capitalize">{item.category}</span>
                <div
                  className="text-danger cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="col-md-3 col-6 mt-3 mt-md-0 d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-outline-secondary me-2"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <input
                  className="form-control text-center"
                  style={{ width: "50px" }}
                  type="text"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value, 10) || 0)
                  }
                />
                <button
                  className="btn btn-outline-secondary ms-2"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Price and Total */}
              <div className="col-md-3 col-6 mt-3 mt-md-0 text-center">
                <div className="fw-semibold">${item.price.toFixed(2)}</div>
                <div className="fw-semibold">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            </div>
          ))}

          <Link to="/products" className="btn btn-link text-decoration-none mt-4">
            Continue Shopping
          </Link>
        </div>

        {/* Right Section: Order Summary */}
        <div className="col-lg-3 col-md-4 px-4 py-4">
          <h1 className="fw-semibold fs-4 border-bottom pb-3">Order Summary</h1>
          <div className="d-flex justify-content-between mt-3 mb-3">
            <span className="fw-semibold">Items {totalItems}</span>
            <span className="fw-semibold">${total.toFixed(2)}</span>
          </div>
          <label className="fw-medium d-block mb-2">Shipping</label>
          <select className="form-select">
            <option>Standard shipping - $10.00</option>
          </select>
          <div className="py-3">
            <label htmlFor="promo" className="fw-medium d-block mb-2">
              Promo Code
            </label>
            <input type="text" id="promo" placeholder="Enter your code" className="form-control" />
          </div>
          <button className="btn btn-danger w-100">Apply</button>
          <div className="border-top mt-4 pt-3">
            <div className="d-flex justify-content-between fw-semibold">
              <span>Total cost</span>
              <span>${(total + 10).toFixed(2)}</span>
            </div>
            <button
              className="btn btn-success w-100 mt-3"
              onClick={() => navigate("/payment", { state: { total, cart } })}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;