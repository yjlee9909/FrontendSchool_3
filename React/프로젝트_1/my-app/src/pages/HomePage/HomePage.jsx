import { useState, useEffect, useContext } from "react";

import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";
import FailLoadData from "../../components/Shared/FailLoadData/FailLoadData";

// import { data } from '../../database/data'
import { callAPIResponse } from "../../database/callAPI";
import "./homePage.css";

export default function HomePage() {
  // console.log(data)
  // const data = null
  // 최초 한번 실행 - 서버오류났음을 알림
  const [loadData, setLoadData] = useState(null);

  // 확인해보기 (새로고침할때 살짝 텍스트 표시)
  // useEffect(() => {
  //   console.log("로딩중...");
  // }, []);

  // useEffect(() => {
  //   if (loadData === null) {
  //     return;
  //   } else {
  //     console.log("로딩완료!!");
  //     console.log(loadData);
  //   }
  // }, [loadData]);

  useContext(callAPIResponse).then((data) => {
    console.log("세팅");
    setLoadData(data);
  });

  return (
    <main className="product">
      {loadData !== null ? (
        <>
          <ul className="product-list">
            {loadData.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </ul>
          <Cart />
        </>
      ) : (
        <FailLoadData />
      )}
    </main>
  );
}
