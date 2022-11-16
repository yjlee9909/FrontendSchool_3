import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
        {/* 기존 V4, V5에서 props나 match형태로 받던 URL의 쿼리스트링은 useLocation 훅 형태로 변경되었습니다. */}
        <Route path="/blog" element={<BlogHome />}/>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}
function BlogHome() {
  return <h1>hello blogHome</h1>
}

function Blog(){
	const location = useLocation();
  // pathname 에 주소가 나온다 pathname : "/blog/1"
  console.log(location)
  return <h1>hello Blog</h1>
}

export default App;