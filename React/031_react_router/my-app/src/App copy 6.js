import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
// 내가 작성한 코드
function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Main</Link>
      <Link to='/product'>ProductDetails</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/buy'>Buy</Link>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product" element={<Product/>}/>

        <Route path="/product/:id" element={<ProductDetails/>}/>

        <Route path="/cart" element={<Cart/>}/>

        <Route path="/buy" element={<Buy/>}/>

      </Routes>
    </BrowserRouter>
  )
}
function Main() {
  return (<h1>hello main</h1>)
}
function Product() {
  return (<h1>hello Product</h1>)
}
function ProductDetails() {
  const location = useLocation();
  return (<h1>hello product details</h1>)
}
function Cart() {
  return (<h1>hello Cart</h1>)
}
function Buy() {
  return (<h1>hello Buy</h1>)
}
export default App;