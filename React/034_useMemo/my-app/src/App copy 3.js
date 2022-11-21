import React, { useState, useMemo } from 'react';
function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

function App() {
  const [count, setCount] = useState(0);
  // 감시변수 설정하기
  const [count2, setCount2] = useState(0);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count)
  }
  const handleCountUpTwo = (e) => {
    setCount2(count2 + 1);
    console.log(count2)
  }
  console.log('랜더링~!');
  const result = useMemo(() => {
    return 부하();
  }, [count2])
  return (
    <div>
      {/* 해결하기 부하가 걸리는 작업을 저장한다. */}
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{count2}</div>
      <button onClick={handleCountUpTwo}>up222!</button>
    </div>
  );
}
export default App;
