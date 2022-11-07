fetch('http://test.api.weniv.co.kr/mall')
    .then(data=>data.json())
    .then(data=>console.log(data))

// 1. 추가 then을 사용하여 7개의 항목 productName만 출력해보세요.(console.log)
fetch('http://test.api.weniv.co.kr/mall')
    .then(data=>data.json())
    .then((data)=>{
        for (const i of data) {
            console.log(i['productName'])
        }
        return data
    })
    .then((data)=>{
        const price = data.filter(i => i.price >= 10000)
        console.log(price);
        return data
    })
    .then((data) => {
        for (const i of data) {
            const name = document.createElement('h2')
            const price = document.createElement('p')
            name.innerText = i.productName['productName'];
            price.innerText = i.price['price'];
            document.body.appendChild(name);
            document.body.appendChild(price);
        }
    })
// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 product를 출력하는 코드를 작성해주세요.(console.log)

// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p태그로 생성하여(DOM) 화면에 출력해주세요.

// 4. error 처리를 해주세요. 

fetch('http://test.api.weniv.co.kr/mall')
    .then(productData=>productData.json())
    .then(productData=>productData)
    .then(productData => {
        console.log(productData.map(item => item.productName));
        return productData;
    })
    .then(productData => {
        console.log(
                productData
                    .map(item => item.price)
                    .filter(item => item >= 10000)
            )
        return productData;
    })
    .then(productData => {
        const main = document.createElement("main");
        productData.forEach(item => {
            const ProductCard = document.createElement("article");
            const productName = document.createElement("h2");
            const productPrice = document.createElement("p");

            productName.textContent = `상품명 : ${item.productName}`;
            productPrice.textContent = `가격 : ${item.price}`;

            ProductCard.appendChild(productName);
            ProductCard.appendChild(productPrice);

            main.appendChild(ProductCard);
        })
        document.body.appendChild(main);
    })
    .catch(error => {
        alert('에러!')
        // error page로 리다이렉트
        console.log(error);
    })


// 5. async, await로 해당 코드 고쳐보기
async function getData(){
    const response = await fetch(`http://test.api.weniv.co.kr/mall`);
    const productData = await(response.json());
    console.log(productData);
    console.log(productData.map((item) => item.productName));
    console.log(productData.map((item) => item.price).filter((item) => item > 10000));

    const main = document.createElement("main");
    productData.forEach(item => {
        const ProductCard = document.createElement("article");
        const productName = document.createElement("h2");
        const productPrice = document.createElement("p");

        productName.textContent = `상품명 : ${item.productName}`;
        productPrice.textContent = `가격 : ${item.price}`;

        ProductCard.appendChild(productName);
        ProductCard.appendChild(productPrice);

        main.appendChild(ProductCard);
    })
    document.body.appendChild(main);
}

// 5.1 - async, await 코드에 이미지 추가하기
async function getData() {
	const response = await fetch(`http://test.api.weniv.co.kr/mall`);
	const productData = await(response.json());
	console.log(productData);

	console.log(productData.map(item => item.productName));
	console.log(productData.map(item => item.price));

	const main = document.createElement('main');
	productData.forEach(item => {
		const productCard = document.createElement('article');
		const productName = document.createElement('h2');
		const productImg = document.createElement('img');
		const productPrice = document.createElement('p');

		productName.innerText = item.productName;
		productPrice.innerText = item.price;

		// img
		productImg.setAttribute('src','http://test.api.weniv.co.kr/' + item.thumbnailImg)
		productImg.setAttribute('class','이미지');
		productImg.setAttribute('alt', item.productName + ' 상품 이미지');

		productCard.appendChild(productName);
		productCard.appendChild(productImg);
		productCard.appendChild(productPrice);
		main.appendChild(productCard);
	})
	document.body.appendChild(main);
}
getData()

getData()

// 6. 이미지 추가해보기

fetch("http://test.api.weniv.co.kr/mall")
    .then((response) => response.json())
    .then((json) => {
        for (let item of json) {
            let 제목 = document.createElement('h2')
            제목.innerText = item.productName
            // document.childNodes[0].childNodes[1].append(제목)
            document.body.append(제목)

            let 사진 = document.createElement('img')
            // 'http://test.api.weniv.co.kr/' + item.thumbnailImg;
            사진.setAttribute('src', 'http://test.api.weniv.co.kr/' + item.thumbnailImg)
            사진.setAttribute('class', '이미지')
            사진.setAttribute('alt', item.productName + ' 상품 이미지')
            document.childNodes[0].childNodes[1].append(사진)
            
            let 가격 = document.createElement('p')
            가격.innerText = item.price
            document.childNodes[0].childNodes[1].append(가격)
        }
    });

// 내가 짜본 코드
fetch('http://test.api.weniv.co.kr/mall')
.then(response => response.json())
.then(data => {
	const main = document.createElement('main');
	for (let item of data) {
		const productCard = document.createElement('article');
		const productName = document.createElement('h2');
		const productPrice = document.createElement('p');
		productName.innerText = item.productName;
		productPrice.innerText = item.price;
		productCard.appendChild(productName);
		productCard.appendChild(productPrice);

		// 이미지
		const img = document.createElement('img');
		img.setAttribute('src','http://test.api.weniv.co.kr/' + item.thumbnailImg);
		img.setAttribute('class','이미지');
		img.setAttribute('alt', item.productName + ' 상품 이미지');

		productCard.appendChild(img);

		main.appendChild(productCard);
	}
	document.body.appendChild(main);
})