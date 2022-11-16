
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

// Main - www.hojun.com
// ProductDetails - www.hojun.com/product/1
// Cart - www.hojun.com/cart
// Buy - www.hojun.com/buy

function Index(){
  return <h2>main page</h2>
}

function ProductDetails(props){
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  // pathname 출력
  console.log(location)
  console.log(path)
  return <h2>ProductDetails {path} page</h2>
}

function Cart(){
  return <h2>Cart page</h2>
}

function Buy(){
  return <h2>Buy page</h2>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}