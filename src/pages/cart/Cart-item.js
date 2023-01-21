import React from 'react'
import { useContext } from 'react'
import { ShopContext } from "../../context/Shop-context"


 export const CartItem = (props) => {
  const { id, name, price, img } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCardItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={img}/>
      <div className="description">
          <p> <b> {name} </b></p>
          <p>{price} LEI</p>
          <div className="countHandler">
              <button onClick={() => removeFromCart(id)}> - </button>
              <input value={cartItems[id]} onChange={(e) => updateCardItemCount(Number(e.target.value), id)}/>
              <button onClick={() => addToCart(id)}> + </button>
          </div>
      </div>
    </div>
  )
}


