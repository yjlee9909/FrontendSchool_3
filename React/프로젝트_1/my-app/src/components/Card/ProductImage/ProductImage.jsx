import React from "react";

export default function ProductImage({ thumbnailImg, productName }) {
  // console.log(props);
  // console.log({ thumbnailImg });
  const url = "http://test.api.weniv.co.kr/" + thumbnailImg;
  return <img src={url} alt={productName} />;
}
