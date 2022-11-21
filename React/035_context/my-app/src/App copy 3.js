import React from 'react'
function Three({price}) {
  return (
    <div>
      가격 : {price}
    </div>
  )
}
function Two({price}) {
  return (
    <div>
      <Three price={price}/>
    </div>
  )
}
function One({price}) {
  return (
    <div>
      <Two price={price}/>
    </div>
  )
}

export default function App() {
  const value = 1000; // 이 값을 three에서 출력하고 싶습니다.
  return (
    <div>
      <One price={value}/>

    </div>
  )
}
