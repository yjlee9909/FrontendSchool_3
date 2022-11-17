import {useState, useEffect, useRef} from 'react'

// 실제로는 fetch해서 얻어온 data라고 생각해주세요.
const data = [
  '개발자 키링 개리',
  '개발자 파우치 위니브',
  '담요',
  '키보드',
  '개발자 키보드',
  '코오오딩노트',
  '일반 무지 노트',
  '위니브 스티커 팩 - 1',
  '위니브 스티커 팩 - 2'
];

export default function App() {
  const searchValue = useRef(null);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    console.log('clicked!!')
    // input창에 입력되는 값 콘솔창에 출력하기
    console.log(searchValue.current.value);
    // fetch 코드가 들어갑니다.
    // input창 내용 지우기
    let value = searchValue.current.value;
    // value = '';

    // 결과물 띄워주기
    // '노트' 검색 관련 단어들 띄워주기
    // console.log(data.filter(item => item.indexOf(searchValue.current.value) !== -1))
    setSearchResult(data.filter(item => item.indexOf(value) !== -1)
    .map(item => <p key={item}>{item}</p>)
    );
    // console.log(arr)
    
  }


  return (
    <div>
      <label>
        검색어를 입력하세요 :
        <input type="text" ref={searchValue}/>
      </label>
      <button onClick={handleSearch}>검색</button>
      {/* 여기에 컴포넌트 Array로 넣어주세요!! */}
      {/* {변수명} */}
      <br />
      {searchResult}
    </div>
  )
}

// import { useState, useRef } from "react";

// // 실제로는 fetch해서 얻어온 데이터라고 생각해주세요.
// const data = [
//   "개발자 키링 개리",
//   "개발자 파우치 위니브",
//   "담요",
//   "키보드",
//   "개발자 키보드",
//   "코오오딩 노트",
//   "일반 무지 노트",
//   "위니브 스티커 팩 - 1",
//   "위니브 스티커 팩 - 2",
// ];

// const SearchItem = ({ data }) => {
//   return <li>{data}</li>;
// };

// export default function App() {
//   const searchValue = useRef(null);
//   const [search, setSearch] = useState([]);

//   const handleSearch = (e) => {
//     const filter = data.filter(
//       (item) => item.indexOf(searchValue.current.value) !== -1
//     );
//     setSearch(filter);
//   };

//   return (
//     <div>
//       <label>
//         검색어를 입력하세요 :
//         <input type="text" ref={searchValue} />
//       </label>
//       <button onClick={handleSearch}>검색</button>
//       <ul>
//         {search.map((item, i) => (
//           <SearchItem data={item} key={i} />
//         ))}
//       </ul>
//     </div>
//   );
// }
