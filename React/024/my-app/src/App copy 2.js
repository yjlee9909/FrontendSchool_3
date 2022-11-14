import { useState } from "react";
// 변수의 값이 변경될 때마다 페이지를 업데이트

function Resume({이름, 취미, 자기소개}){
  const [like, setLike] = useState(0)
  // const [like, setLike] = useState('100')
  // const [like, setLike] = useState('hello world')

// handle 붙이기
  function handleClickLike(){
    setLike(like+1); // like = like + 1
    // setLike(like+2);
    // setLike(like+'hello'+'world');

    console.log(like)
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      {/* 증가시키기!!
      */}
      <button onClick={handleClickLike}>{like}</button>
    </section>
  )
}

function App() {
  return (
    <main>
      <Resume 이름='lee' 취미='코딩' 자기소개='안녕하세요'/>
    </main>
  );
}

export default App;