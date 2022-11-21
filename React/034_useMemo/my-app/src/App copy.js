import React, { useState } from 'react';
function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

function App() {
  const [count, setCount] = useState(0);
  let result = 부하();
  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count)
  }
  return (
    <div>
      {/* 다시 렌더링 -> 부하가 1번 더 실행됨 */}
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
    </div>
  );
}
export default App;
