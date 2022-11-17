import {useState, useRef} from 'react'

// 이름 성별 나이 쓰면 자기소개로 출력하기
// 문제 input창 3개를 만들어 자기소개를 하는 기능을 만들어주세요.
// input 1 - 이름
// input 2 - 성별
// input 3 - 나이
// button - 자기소개
// return - 제 이름은 이호준입니다. 저는 남자이고요. 나이는 10살입니다.

export default function App() {
  const 이름 = useRef(null);
  const 성별 = useRef(null);
  const 나이 = useRef(null);
  const [자기소개, set자기소개] = useState('')
  const handle자기소개 = (e) => {
    set자기소개(`
      제 이름은 ${이름.current.value}
      제 성별은 ${성별.current.value}
      제 나이는 ${나이.current.value} 
      
    `
      )
  }

  return (
    <div>
      <label>
        이름을 입력하세요 : 
        <input type="text" ref={이름}/>
      </label>
      <br />
      <br />
      <label>
        성별을 입력하세요 : 
        <input type="text" ref={성별}/>
      </label>
      <br />
      <br />
      <label>
        나이를 입력하세요 : 
        <input type="number" ref={나이}/>
      </label>
      <button onClick={handle자기소개}>자기소개</button>
      {자기소개}
    </div>
  )
}
