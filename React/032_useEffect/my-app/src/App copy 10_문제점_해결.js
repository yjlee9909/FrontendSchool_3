import { useState, useEffect } from "react"
export default function App() {
  const [수업여부, set수업여부] = useState('수업중');
  const [잔고, set잔고] = useState(100000);

  const handleZoomOut = (e) => {
    
      set수업여부('수업종료');
    
  }
  useEffect(() => {
    if (수업여부 === '수업종료' && 잔고 >= 20000) {
      alert('카페로 출발!');
      // 다시 렌더링됨
      set잔고(90000);
    }
  }, [수업여부])
  // 수업여부 한번만 넣기!! [잔고]까지 넣으면 무한 반복에 빠지게 됩니다.

  return (
    <div>
      <button onClick={handleZoomOut}>Zoom out</button>
      <p>{수업여부}</p>
      <p>{잔고}</p>
    </div>
  )
}
