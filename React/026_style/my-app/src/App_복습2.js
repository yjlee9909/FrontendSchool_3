
// 설치 명령어 
// npm install styled-components
// npm i styled-reset
// import styled from "styled-components";

import styled from 'styled-components';

const One = styled.div`
  color:red;
`
const Two = styled.div`
  color:green;
  font-size : ${props => props.size + 'px'}
`
const Three = styled.div`
  color:${(옵션) => 옵션.option === '하나' ? 'red' : 'blue'};
`


function App() {
  return (
    <>
      <One>hello</One>
      <Two size={60}>hell2o</Two>
      <Three option={'하'}>sd</Three>
    </>
  )
}

export default App;