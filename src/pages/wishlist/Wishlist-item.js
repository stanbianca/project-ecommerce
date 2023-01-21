import React from 'react'
import { useContext } from 'react'
import { WishlistContext } from "../../context/Wishlist-context"


 export const WishlistItem = (props) => {
  const { id, name, price, img } = props.data;
  const { removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlistItem">
      <img src={img}/>
      <div className="description_wishlist">
          <p> <b> {name} </b></p>
          <p>{price} LEI</p>
          <div className="removeFromWishlist">
              <button onClick={() => removeFromWishlist(id)}> Remove from wishlist </button>
          </div>
      </div>
    </div>
  )
}