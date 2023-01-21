import React from 'react';
import { ShopContext } from "../../context/Shop-context"
import "./Shop.css";
import { useContext } from "react";
import { WishlistContext } from '../../context/Wishlist-context';

export const Product = (props) => {
  const { id, name, price, img } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);
  const {addToWishlist, doesIncludesItem, removeFromWishlist } = useContext(WishlistContext);

  const cartItemAmount = cartItems[id];
  
  
  return (
  <div className="product">
     <img src={img}/>
     <div className="description">
         <p>
      <b>{name}</b>
        </p>
        <p>{price} LEI</p>
     </div>
     <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
     </button>
     <button className="addToWishListBttn" onClick={() => doesIncludesItem(id) ? removeFromWishlist(id) : addToWishlist(id)}> 
        {doesIncludesItem(id) ? "Remove from wishlist" : "Add to wishlist"}  </button>
  </div>
  )
};


