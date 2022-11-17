import { useState, useEffect } from "react";

function Time(props) {
  /// 추가
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

    console.log("렌더링이 됩니다..?")
  useEffect(() => {
    let time = setInterval(() => {
      // 현재 시간을 setToday에 업데이트
      const t = new Date();
      setToday(t);
    }, 1000);
    // 여러 파생된 애들 다 청소하고 위에서부터 재실행한다고 생각
    return () => {
      //
      // 파생되지 않게 설정
      clearInterval(time);
    };
  }, [today]);
  // 34초 35초 36초 ... 각각 다 setInterval()을 실행하니까 청소하겟다는 의미로 clearInterval() 실행시켜줌

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;
// 암기!! 중요!!!
// // 컴포넌트가 업데이트 될 때마다 매번 실행
// useEffect(()=>{
//   console.log('hello world');
// })

// // 처음에만 실행
// useEffect(()=>{
//   console.log('hello world');
// }, [])

// // 변수들의 변화가 일어날 때마다 실행
// useEffect(()=>{
//   console.log('hello world');
// }, [변수1, 변수2...])