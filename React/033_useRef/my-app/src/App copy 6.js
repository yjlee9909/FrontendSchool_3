import {useState, useRef} from 'react'
// 내 코드
// 이름 성별 나이 쓰면 자기소개로 출력하기
// 문제 input창 3개를 만들어 자기소개를 하는 기능을 만들어주세요.
// input 1 - 이름
// input 2 - 성별
// input 3 - 나이
// button - 자기소개
// return - 제 이름은 이호준입니다. 저는 남자이고요. 나이는 10살입니다.

export default function App() {
  const valueOne = useRef(null);
  const valueTwo = useRef(null);
  const valueThree = useRef(null);
  const [valueResult, setValueResult] = useState([]);
  const handleInput = (e) => {
    // console.log('hi')
    // console.log(valueName.current.value)
    // console.log(valueSex.current.value)
    // console.log(valueAge.current.value)

    setValueResult(<p>이름은 {valueOne.current.value}이고 성별은 {valueTwo.current.value}이며 나이는 {valueThree.current.value}살  입니다.</p>)
  }

  return (
    <div>
      <label>
        이름을 입력하세요 : 
        <input type="text" ref={valueOne}/>
      </label>
      <br />
      <br />
      <label>
        성별을 입력하세요 : 
        <input type="text" ref={valueTwo}/>
      </label>
      <br />
      <br />
      <label>
        나이를 입력하세요 : 
        <input type="number" ref={valueThree}/>
      </label>
      <button onClick={handleInput}>자기소개</button>
      {valueResult}
    </div>
  )
}
