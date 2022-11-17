import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count+1)
  }
// 1번째에만 실행
  useEffect(() => {
    console.log('실행되었습니다!!')
  }, [])

  return(
    <>
    <div>{count}</div>
    <button onClick={countUp}>up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;