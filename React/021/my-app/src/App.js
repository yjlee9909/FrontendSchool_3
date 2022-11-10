function One(props) {
  return (
    <div>
      <p>{props.name}님 안녕하세요!</p>
      <p>당신의 나이는 {props.age * 100}입니다.</p>
    </div>
  )
}

function Two({name, age}) {
  return (
    <div>
      <p>{name}님 안녕하세요!</p>
      <p>당신의 나이는 {age * 10}입니다.</p>
    </div>
  )
}

function App() {
  return (
    <>
			<h1>안녕, 라이캣 1호!</h1>
			<h1>안녕, 라이캣 2호!</h1>
      <br />
      <One name = 'lee' age = {10}/>
      <br />
      <Two name = 'lee' age = {10}/>
		</>
  );
}

export default App;