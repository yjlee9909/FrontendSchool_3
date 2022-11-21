import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {

  const [num, setNum] = useState(0)

  const handleonClick = () => {
    setNum(num + 1)
  }

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 1')
    return () => {
      console.log('useLayoutEffect return_1')
    }
  }, [])
  // []은 최초 한번만 실행

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 2')
    return () => {
      console.log('useLayoutEffect return_2')
    }
  })
  // 무조건 실행

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 3')
    return () => {
      console.log('useLayoutEffect return_3')
    }
  }, [num])
  // num이 변했을때 실행

  useEffect(()=>{
    console.log('useEffect 1')
    return () => {
      console.log('useEffect return_1')
    }
  }, [])
    // []은 최초 한번만 실행

  useEffect(()=>{
    console.log('useEffect 2')
    return () => {
      console.log('useEffect return_2')
    }
  })

  useEffect(()=>{
    console.log('useEffect 3')
    return () => {
      console.log('useEffect return_3')
    }
  }, [num])

  return (
    <button onClick={handleonClick}>{num}</button>
  );
}

const Wrap = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  const handleClick = ()=> setIsVisible(!isVisible)
  return (
    <>
      <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible&& <App />}
    </>
  )
}

export default Wrap;