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

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count)
  }
  // useMemo 추가하기
  const result = useMemo(() => {
    return 부하();
  }, [])
  return (
    <div>
      {/* 해결하기 부하가 걸리는 작업을 저장한다. */}
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
    </div>
  );
}
export default App;
