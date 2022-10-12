// callback function (나중에 부를거다)

function sum(x,y, 콜백함수) {
    콜백함수(x+y);  // 30
    return x + y; // 30
}
sum(10, 20, console.log);

function documentWriter(s){
    document.write('콜백함수', s);
}
sum(10,20,documentWriter);
// 함수이름을 아규먼트로 전달을 해서 코드 어딘가에서 언젠간 실행을 하겠다.

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])

function 제곱(x) {
    return x ** 2;
}
// x => x**2
let arr = [10,20,30,40,50];
// 함수를 만들어서 콜백함수 이름만 아규먼트로 넘기기!!
arr.map(제곱);

// 화살표 함수
arr.map(x => x ** 2);

////
function 두배(x){
    console.log(x * 2);
}
let arr = [10,20,30,40,50];
arr.forEach(두배);
// 새로운 배열 만들지 않음
// forEach의 주의점 -> set, map, array 등등 많음



///////////
let arr = [10,20,30,40,50];
arr.map(x => x ** 2);
// 새로운 배열 생성

// 문제) 화살표 함수를 사용해서 아래 map과 동일한 기능을 하는 forEach문 완성하기
// 새로운 배열 생성하기
let arr = [10,20,30,40,50];
let result = [];
arr.forEach(e => {
    result.push(e ** 2);
});
console.log(result);