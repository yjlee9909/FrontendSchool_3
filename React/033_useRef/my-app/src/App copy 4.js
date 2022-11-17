import {useState, useEffect, useRef} from 'react'

export default function App() {
  const searchValue = useRef(null);

  const handleSearch = (e) => {
    console.log('clicked!!')
    // input창에 입력되는 값 콘솔창에 출력하기
    console.log(searchValue.current.value);
    // fetch 코드가 들어갑니다.
    // input창 내용 지우기
    searchValue.current.value = '';

    // 결과물 띄워주기
    
  }


  return (
    <div>
      <label>
        검색어를 입력하세요 :
        <input type="text" ref={searchValue}/>
      </label>
      <button onClick={handleSearch}>검색</button>
    </div>
  )
}
