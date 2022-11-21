import React, { useRef, useState } from 'react'

export default function App() {
  const inputName = useRef(null);
  const inputId = useRef(null);
  
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  function handleInputName(e) {
    // input창 값이 변경될때마다 값 가져오기
    console.log(e.target.value);
    setName(e.target.value);
    console.log('렌더링 - 1');
  }
  function handleInputId(e) {
    console.log(e.target.value);
    setId(e.target.value);
    console.log('렌더링 - 2');
  }
  function handleSubmit(e) {
    e.preventDefault();
    // userInfo.push({});
    const newInfo = [...userInfo, {name : name, id : id}];
    inputName.current.value = '';
    inputId.current.value = '';
    inputName.current.focus();
    setUserInfo(newInfo)
    console.log('렌더링 - 3');

  }
  // 입력할때마다 렌더링되는 이슈가 있습니다.
  function getNum(li) {
    console.log('렌더링!');
    return li.length;
  }
  return (
    <>
      <form>
        <input 
          type="text"
          placeholder='이름을 입력하세요'
          onChange={handleInputName}
          ref={inputName}
        />
        <input 
          type="text"
          placeholder='아이디를 입력하세요'
          onChange={handleInputId}
          ref={inputId}
        />
        <button type='submit' onClick={handleSubmit}>
          회원가입
        </button>
      </form>
      <ul>
        {
          userInfo.map((value, index) => (
            <li key={index}>
              <h3>이름 : {value.name}</h3>
              <strong>아이디 : {value.id}</strong>
            </li>
          ))
        }
      </ul>
      <span>{getNum(userInfo)}</span>
    </>
  )
}
