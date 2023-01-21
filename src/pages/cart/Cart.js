import React from 'react'
import { PRODUCTS } from '../../Products'
import { ShopContext } from "../../context/Shop-context"
import { useContext } from 'react'
import { CartItem } from "./Cart-item"
import "./Cart.css";

import { useNavigate } from 'react-router';


export const Cart = () => {

const { cartItems, getTotalCartAmount } = useContext(ShopContext);
const totalAmount = getTotalCartAmount();

const navigate = useNavigate();

  return (
    <div className="cart">
        <div>
            <h1>Articolele din cosul dumneavoastra</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) => {
            if(cartItems[product.id] !== 0 ) {
               return <CartItem data={product}/>
            }


         })}
        </div>
  { totalAmount > 0 ? (
        <div className="checkout">
            <p> Subtotal: {totalAmount} LEI </p>
            <button onClick={() => navigate("/shop")}> Continua cumparaturile </button>
        </div>
  ) : (
      <h1> Cosul este gol </h1>
  )}
    </div>

    
  );
}

