import {useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import shoppingCart from './assets/icon-shopping-cart-white.svg';
import heart from './assets/icon-heart.svg';
// npx create-react-app my-app --template basic-react
// cd my-app
// npm install styled-components styled-reset

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* reset코드 + 커스텀 reset코드 + 유틸리티코드 */
  /* 한 줄 말줄임, 두 줄 말줄임... */
  span {
    color: red;
    font-size: 12px
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;
const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`;
const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px
`;
const IconShoppingCart = styled.a`
  background: #000 url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: sticky;
  top: 60px
`;
const ProductNameStyle = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const PriceStyle = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #333333;
  margin-right: 2px;
`;
/* const IconHeart; */

// 파일 분리 해줘야함 promise로 반환해서 async 사용
async function requests() {
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  // 마찬가지로 promise
  const data = await response.json();
  return data;
}
function ProductList() {
  // 데이터 받아오기 호출 (promise)
  const [productListData, setproductListData] = useState([]);
  // 다시 랜더링 (프로덕트 데이터에 리턴된 data가 넘어옴 -> 데이터를 가지고 setproductListData를 productData를 가지고 변경시켜줌
  // setproductListData는 데이터가 변하면 랜더링을 다시 해줌
  // requests() 요청 성공하면 -> setproductListData로 다시 랜더링 시작되는 것
  // 무한반복이 일어나는 이유? => productData를 변경시키면 함수를 다시 랜더링 -> 다시 실행 -> 또 데이터 호출 -> 무한반복
  // requests().then(productData => setproductListData(productData));
  // console.log(productListData)
  // const productListData = requests();
  // console.log(productListData) // 위와 같이 실행하면 promise입니다.

  // 무한반복 해결 방법
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);
  // 한 번 로드가 되는 경우 실행시키고 data넣고 false로 변경 -> 다시 실행 -> false이므로 실행하지 않음(랜더링 안함)
  if (dataLoadSwitch) {
    requests().then(productData => {
      setproductListData(productData)
      setDataLoadSwitch(false);
    });
  }

  return (
    <ContainerProductList>
      {productListData.map(item => 
        <ProductListItem 
          key={item.id} 
          productName={item.productName}
          price={item.price}
          thumbnailImg={item.thumbnailImg}
        />
      )}
    </ContainerProductList>
  )
}

function ProductListItem({productName, price, thumbnailImg}){
  return (
    <ItemProductList>
      <ImgProduct 
        src={"http://test.api.weniv.co.kr/" + thumbnailImg} 
        alt={productName} 
      />
      <ProductNameStyle>{productName}</ProductNameStyle>
      <span>sd</span>
      <p><PriceStyle>{price}</PriceStyle>원</p>
    </ItemProductList>
  )
}
function ShoppingCart() {
  return( <IconShoppingCart href="#"></IconShoppingCart> )
}

function App() {
  return (
    <ContainerMain>
      {/* reset 코드 실행 */}
      <GlobalStyle/>
      <ProductList/>
      <ShoppingCart/>
    </ContainerMain>
  );
}
export default App;