import {useState, useEffect} from 'react'

function Counter (){
  // 값이 변경될 떄 다시 재 실행
  const [count, setCount] = useState(0)
  let test = 0
  const handleCountUp = (e) => {
    setCount(count + 1)
  }
  // 랜더링 안됨 -> 변화 없음
  const handleTestCountUp = (e) => {
    test += 1
    console.log(test)
  }

  //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  useEffect (() => {
    if (count%2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  })
  // , 감시할 변수 넣기 -> count가 변경되면 안에 내용이 실행됨
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
      <div>{count}</div>
      <button onClick={handleTestCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;