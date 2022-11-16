// ```bash
// npx create-react-app my-app
// cd my-app
// npm install react-router-dom
// ```
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        {/* 다 한 페이지에서 작동 : SPA (url은 달라지지만 한 페이지에서 작동하며 바닐라에서도 구현이 가능하다.) */}
        {/* url에 path가 추가됨 : 브라우저 라우터 */}
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat'/>}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One(props){
  console.log(props)
  return <h1>{props.name} hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;
