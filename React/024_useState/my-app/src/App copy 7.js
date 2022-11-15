
// (관습) 핸들러 함수는 앞에 접두사로 handle라고 붙여줍니다. 주의! 회사 컨벤션이 다를 수 있습니다.
function App() {
  const handleOnMouseEnter = () => {
    console.log("안녕하세요!");
  };

  const handleOnMouseLeave = () => {
    console.log("안녕히가세요!");
  };

  return (
    <div>
      <p 
        onMouseEnter={handleOnMouseEnter} 
        onMouseLeave={handleOnMouseLeave}
      >
        여기에 마우스를 올려보세요!
      </p>
    </div>
  );
}

export default App;