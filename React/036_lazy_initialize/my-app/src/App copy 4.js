import { useState, useEffect, useLayoutEffect } from 'react'
// 깜빡이는 예제
function App() {
  const [value, setValue] = useState(100);
  // value는 100
  // useLayoutEffect로 변경해줘야함
  useEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);
  
  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div style={{ width: value, height: value, backgroundColor: 'blue' }}></div>
      {/* valuerk 100 -> 1000으로 변경된 후에 useEffect 실행됨 (이미 1000으로 보여진 다음에 300으로 바뀜) */}
      <button onClick={() => {setValue(1000)}}>커져랏!</button>
      <button onClick={() => {setValue(200)}}>작아져랏!</button>
    </div>
  )
}

export default App;

// 1. useLayoutEffect는 useEffect보다 먼저 실행됩니다. 따라서 useEffect보다 먼저 실행하고 싶은 무언가가 있다면 useLayoutEffect를 사용해야 한다라는 것을 알 수 있습니다.

// 2. 
// 2.1 렌더링 되었을 때 useLayoutEffect return의 콜백함수가 실행됩니다. 그리고 useLayoutEffect 가 실행됩니다.
// 2.2 useEffect return의 콜백함수가 실행됩니다. useEffect 가 실행됩니다.

// 3. 깜빡임을 해결하고 싶다? useEffect -> useLayoutEffect