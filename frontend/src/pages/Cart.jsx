import React from "react";
import "./Cart.scss";

const Cart = () => {
    return (
        <div className="cart-container">
            <div className="cart">
                <div className="left">
                    <p className="header">
                        Purchase your custom package by filling in your details
                        below — we can't wait to work with you 🎉 !
                    </p>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
};

export default Cart;
