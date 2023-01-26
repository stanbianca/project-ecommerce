import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar/Navbar'
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { Wishlist } from"./pages/wishlist/Wishlist";
import { ShopContextProvider } from './context/Shop-context';
import { WishlistContextProvider } from './context/Wishlist-context';
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/footer/Footer"
import { Product } from "./pages/product/Product"
import "./index.css";




function App() {
  return (
    <div className="App">
      <div>
    <WishlistContextProvider>
    <ShopContextProvider>
     <Router>
       <Navbar />
       <Routes>
         <Route path="/shop" element={<Shop/>}/>
         <Route path="/cart"  element={<Cart/>}/>
         <Route path="/wishlist" element={<Wishlist/>} />
         <Route path="/product" element={<Product/>} />
         <Route path="/" element={<Home/>}/>
       </Routes>
     </Router>
     </ShopContextProvider>
     </WishlistContextProvider>
     </div>
     <Footer/>
    </div>
    
  );
}

export default App;
