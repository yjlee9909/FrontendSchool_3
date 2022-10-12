// 생성자 함수 만드는 이유
// 객체를 쉽게 만들기 위해 생성자 함수를 만든다. 찍어내는 용도로 사용

let book = {
    책이름: 'JavaScript',
    책가격: 1000,
    저자: '홍길동',
    출판일: '22.10.11'
}
let newBook = {};
// 예를 들어 form에서 입력 받은 값
newBook['책이름'] = 'JavaScript';
newBook['책가격'] = 1000000;
newBook['저자'] = '가가,나나,다다';
newBook['출판일'] = '22.10.30';

// {책이름: 'JavaScript', 책가격: 1000000, 저자: '가가,나나,다다', 출판일: '22.10.30'}

// 깔끔하지 못하므로 효율적으로 사용하는게 생성자 함수

function Book(책이름, 책가격, 저자, 출판일) {
    this.책이름 = 책이름; // this.책이름 !== 책이름
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
}

// let data = Book('CSS', 10, '유진', '22.12.30');
// undefined -> return이 없으므로

// new를 붙이는 경우
let data = new Book('CSS', 10, '유진', '22.12.30');
// Book {책이름: 'CSS', 책가격: 10, 저자: '유진', 출판일: '22.12.30'}
// Object 처럼 나타남 - 객체를 찍어내는 용도로도 사용 가능

let data1 = new Book('HTML', 10, '유진', '22.12.30');
let data2 = new Book('CSS', 20, '유진', '23.12.30');
let data3 = new Book('JS', 30, '유진', '24.12.30');

// new 키워드를 사용했을 경우
// function Book(책이름, 책가격, 저자, 출판일) {
//     this = {}
//     this.책이름 = 책이름; // this.책이름 !== 책이름
//     this.책가격 = 책가격;
//     this.저자 = 저자;
//     this.출판일 = 출판일;
//     return this;
// }
// 내부적으로 this = {}, return this; 처럼 작동하게 됨!!

// 