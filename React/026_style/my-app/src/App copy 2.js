

import styled from 'styled-components';

const ContenetsDivOne = styled.div`
  color:red;
`
const ContenetsDivTwo = styled.div`
  color:green;
`
const ContenetsH2Three = styled.h2`
  color:blue;
`

function App() {
  return (
    <>
      <ContenetsDivOne>hello world</ContenetsDivOne>
      <ContenetsDivTwo>hello world</ContenetsDivTwo>
      <ContenetsH2Three>hello world</ContenetsH2Three>
    </>
  );
}

export default App;