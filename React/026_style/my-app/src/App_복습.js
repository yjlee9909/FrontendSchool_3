

// step 1 - key 값 부여하기
// const arr = [10, 20, 30, 40, 50];
// function App() {
//   return (
//     <div>
//       {/* {arr.map(v => <p>{v}</p>)} */}
// 키 값은 숫자도 가능합니다. key={v}
//       {arr.map(v => <p key={v.toString()}>{v}</p>)}
//     </div>
//   );
// }


// step 2 조건부 렌더링
// const value = 2;
// function App() {
//   if (value === 1) {
//     return (<h1>hello one</h1>)
//   } else if (value === 2) {
//     return (<h1>hello two</h1>)
//   } else if (value === 3) {
//     return (<h1>hello three</h1>)
//   }
// }

// step 3 스타일 적용하기 - 클래스이름 고려 안함, 다른 컴포넌트 간섭 안함
// 설치 명령어 
// npm install styled-components
// npm i styled-reset
// import styled from "styled-components";

// const DivBlue = styled.div`
//   color:blue
// `;
// const DivRed = styled.div`
//   color:red
// `;

// function App() {
//   return (
//     <>
//       <DivBlue>hi</DivBlue>
//       <DivRed>hi</DivRed>
//     </>
//   )
// }


function App() {
  return (<h1>hello</h1>)
}

export default App;