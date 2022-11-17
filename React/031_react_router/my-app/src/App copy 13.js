import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

// - **Home Page : /
// - **Product Detail Page** : /products/:id
    
//     ex) /products/1 , /products/2, /products/3, /products/4
    
// - **Product Detail Notice Page : /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - **Cart Page : /cart
// - **Coupon Page : /users/coupon
// - **Question Page : /users/question
// - **Notice Page : /users/notice
// - **User Page : /users
function HomePage() {
  return (<p>HomePage</p>)
}
function ProductDetail() {
  const {id} = useParams();
  console.log({id})
  return (<p>product {id}번 페이지입니다.</p>)
}
function ProductDetailNotice() {
  const {id} = useParams();
  console.log({id})
  return (<p>product {id}번 notice 페이지입니다.</p>)
}
function Cart() {
  return (<p>Cart</p>)
}
function Users() {
  return (<p>Users</p>)
}
function Coupon() {
  return (<p>Coupon</p>)
}
function Question() {
  return (<p>Question</p>)
}
function Notice() {
  return (<p>Notice</p>)
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/products/:id/notice" element={<ProductDetailNotice/>}/>
        <Route path="/cart" element={<Cart/>}/>

        <Route path="/users" element={<Users/>}/>
        <Route path="/users/*" element={<Outlet/>}>
          <Route path="coupon" element={<Coupon/>}/>
          <Route path="question" element={<Question/>}/>
          <Route path="notice" element={<Notice/>}/>
        </Route>

        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;