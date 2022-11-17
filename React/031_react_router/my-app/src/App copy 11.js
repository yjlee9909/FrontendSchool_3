import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

// 1

// 2

function Index(){
  return <h1>hello Main</h1>
}
function Login(){
  return <h1>hello Login</h1>
}
function Study(){
  return <h1>hello study</h1>
}
function StudyDetail(){
  // console.log(props); // 이전 버전에서는 props로 처리했습니다.
  // useLocation, useParams 둘 다 사용할 수 있습니다.
  const location = useLocation();
  const {num} = useParams();
  const path = location.pathname.split('/')[2];

  // fetch 예를 든겁니다.
  // fetch('www.test.abc/${num}') 이런식으로 데이터를 가지고와서 아래에다가 데이터를 뿌려주면 blog 형식이 완성되는 것입니다.


  // return <p>{num}번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 {num}번 게시물을 요청하셔야 합니다.</p>
  return <p>{path}번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 {path}번 게시물을 요청하셔야 합니다.</p>
}
// function Test(){
//   const location = useLocation()
//   const { test } = useParams()
  
//   console.log(location)
//   console.log(test)

//   return <div>hello</div>
// }
function Chat(){
  const location = useLocation();
  // const params = useParams();
  console.log(location)
  // 권하진 않습니다. 왜 이렇게 사용하면 url의 주소의 깊이가 깊어졌을 때 www.dsfsf.com/a/b/c/d/e 인 경우에 앞에 있는 값이 필요한 경우가 종종 있습니다.
  const 채팅방번호 = location.pathname.split('/')[2];
  return <p>{채팅방번호}번 게시물에 오신것을 환영합니다. 여기는 {채팅방번호}번 게시물의 채팅방입니다. 여러분이 fetch를 통해서 백엔드에서 채팅 정보를 받아와야 합니다.</p>
}

function Memo(){
  // const location = useLocation();
  // const path = location.pathname.split('/')[3];
  const {num} = useParams();
  // console.log(params)
  return <p>{num}번 게시물에 오신것을 환영합니다. 여기는 {num}번 게시물의 메모방입니다.</p>
}

function Notice(){
  return <h1>hello Notice</h1>
}

// 최종목표
// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login
// https://www.studyin.co.kr/study/6
// https://www.studyin.co.kr/study/6/chat
// https://www.studyin.co.kr/study/6/memo
// https://www.studyin.co.kr/notice
// https://www.studyin.co.kr/notice/recruit
// https://www.studyin.co.kr/notice/business

// step 1
// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login
// https://www.studyin.co.kr/study
// https://www.studyin.co.kr/notice

// step 2
// https://www.studyin.co.kr/study/6 를 들어갔을 때에 <p>6번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 6번 게시물을 요청하셔야 합니다.</p>

// step 2
// https://www.studyin.co.kr/study/6/chat
// https://www.studyin.co.kr/study/6/memo
// <p>6번 게시물에 오신것을 환영합니다. 여기는 6번 게시물의 채팅방입니다.</p>
// <p>6번 게시물에 오신것을 환영합니다. 여기는 6번 게시물의 메모방입니다.</p>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/study" element={<Study/>}/>
        <Route path="/study/:num" element={<StudyDetail/>}/>
        <Route path="/study/:num/chat" element={<Chat />}/>
        <Route path="/study/:num/memo" element={<Memo />}/>
        <Route path="/notice/*" element={<Notice/>}>
          {/* <Route path="" element={<NoticeIndex/>}/>
          <Route path="recruit" element={<NoticeRecruit/>}/>
          <Route path="business" element={<NoticeBusiness/>}/> */}

        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;