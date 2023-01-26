import React, { useEffect, useState } from 'react'
import { PRODUCTS } from '../../Products';
import { useLocation } from "react-router-dom";
import "./Product.css"
import { useContext } from "react";
import { WishlistContext } from '../../context/Wishlist-context';
import { ShopContext } from "../../context/Shop-context"


 export const Product = () => {

  const {addToCart, cartItems} = useContext(ShopContext);
  const {addToWishlist, doesIncludesItem, removeFromWishlist } = useContext(WishlistContext);

  const search = new URLSearchParams(useLocation().search);
  const [product, setProduct] = useState({});

   useEffect(() => {
       for (const product of PRODUCTS) {
         if (Number(product.id) === Number(search.get("id"))) {
             setProduct(product);
         }
       }
   }, [search])

  return (
    <div className="product-preview">
    <img src={product?.img}/>
    <div className="product-details">
    <h1>{product?.name}</h1>
    <h2>{product?.price} LEI</h2>
    <button className="addToCartBttn" onClick={() => addToCart(product?.id)}>
          Add to Cart {cartItems[product?.id] > 0 && <> ({cartItems[product?.id]})</>}
     </button>
     <button className="addToWishListBttn" onClick={() => doesIncludesItem(product?.id) ? removeFromWishlist(product?.id) : addToWishlist(product?.id)}> 
        {doesIncludesItem(product?.id) ? "Remove from wishlist" : "Add to wishlist"}  </button>
    </div>
  </div>
  )
}