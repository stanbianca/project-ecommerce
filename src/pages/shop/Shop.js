import React, { useEffect, useState } from 'react'
import { PRODUCTS } from '../../Products';
import { Product } from "./Product";


 export const Shop = () => {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(PRODUCTS);

   useEffect(() => {
          setProducts(PRODUCTS.filter(product => String(product.name).toLowerCase().includes(search.toLowerCase())) )

   }, [search])

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Produsele noastre</h1>
            <input
                type="text"
                value={search}
                placeholder="Search..."
                onChange={e => setSearch(e.target.value)}
          />
        <div className="products">
         {products.map((product, idx) => (
           <Product key={idx} data={product} />
         ))}
      </div>
    </div>
  </div>
  )
}