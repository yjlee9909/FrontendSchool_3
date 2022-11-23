import { useRef } from "react";
import ProductImage from "./ProductImage/ProductImage";
import ProductName from "./ProductName/ProductName";
import ProductPrice from "./ProductPrice/ProductPrice";
import "./card.css";

export default function Card({ productName, price, thumbnailImg }) {
  //   console.log(thumbnailImg);
  //   console.log({ ...{ thumbnailImg } });
  //   let thumbnailImg = 'asset/img/1/thumbnailImg.jpg'
  //   undefined
  //   {thumbnailImg }
  //   {thumbnailImg: 'asset/img/1/thumbnailImg.jpg'}
  //   {...thumbnailImg}
  //   {0: 'a', 1: 's', 2: 's', 3: 'e', 4: 't', 5: '/', 6: 'i', 7: 'm', 8: 'g', 9: '/', 10: '1', 11: '/', 12: 't', 13: 'h', 14: 'u', 15: 'm', 16: 'b', 17: 'n', 18: 'a', 19: 'i', 20: 'l', 21: 'I', 22: 'm', 23: 'g', 24: '.', 25: 'j', 26: 'p', 27: 'g'}

  //   {...{thumbnailImg}}
  //   {thumbnailImg: 'asset/img/1/thumbnailImg.jpg'}

  //   console.log(id);
  const likeBtn = useRef();
  function handleLikeBtn(e) {
    console.log(e);
    console.log(e.currentTarget.classList);
    e.currentTarget.classList.toggle("on");
  }
  return (
    <li className="product-item">
      {/* thumbnailImg를 오브젝트로 전달 {} -> 전개해서 넘겨주면 받아서 사용이 가능하다. */}
      <div className="product-img">
        <ProductImage {...{ thumbnailImg, productName }} />
      </div>
      <ProductName {...{ productName }} />
      <button
        ref={likeBtn}
        onClick={handleLikeBtn}
        className="like-btn"
      ></button>

      <div className="product-price">
        <ProductPrice {...{ price }} />
      </div>
    </li>
  );
}
