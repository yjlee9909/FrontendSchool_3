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
function Main() {
  return (<p>Main</p>)
}
function A() {
  return (<p>A</p>)
}
function B() {
  return (<p>B</p>)
}
function C() {
  return (<p>C</p>)
}
function One() {
  return (<p>One</p>)
}
function Two() {
  return (<p>Two</p>)
}
function D() {
  return (<p>D</p>)
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/a" element={<A/>}/>
        <Route path="/b" element={<B/>}/>
        <Route path="/c" element={<C/>}/>
        <Route path="/c/*" element={<Outlet/>}>
          <Route path="1" element={<One/>}/>
          <Route path="2" element={<Two/>}/>
          <Route path="d" element={<D/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;