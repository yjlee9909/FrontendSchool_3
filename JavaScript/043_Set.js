// 집합, 합집합, 교집합, 차집합...
let s = new Set ('abcdeeeee'); // {'a', 'b', 'c', 'd', 'e'}
console.log(s);
console.log(s.size); // 5

// 문제 : 몇 명이 게시판에 게시물을 썼나요?
// 문제 : 각각 몇 개의 게시물을 작성하였나요??
회사게시판 = ['이이이','이이이','이이이','김김김','김김김','이나이'];
let 게시판 = new Set(회사게시판);
console.log(게시판.size);

// 순회돌기
for (const i of 게시판) {
    console.log(i, 회사게시판.filter(e => e === i));
}

for (const i of 게시판) {
    console.log(i, 회사게시판.filter(e => e === i).length);
}


let map = new Map();
for (const i of 회사게시판) {
    map.set(i, (map.get(i) ||  0) + 1); // 순회 돌면서 해당 key값을 업데이트 해주는 식으로
}

// 서현주님 코드
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 1)
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 2)
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 3)
map.set('김은하', (map.get('김은하') ||  0) + 1)
// => map.set('김은하', 1)

let map = new Map(); // key 값 중복이 안됨!!!

let s = new Set('abcdeeeeee');
console.log(s.size);
console.log(s.add('f'));
// set 순환하기
for(let variable of s) {
    console.log(variable);
}
// 값이 배열인 경우
let ss = new Set('abcdeeeeeeeee'.split(''));
console.log(ss);


/////// 자주 사용되는 것
// 교집합, 합집합, 차집합
let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter(value => b.has(value)) // value : a,b,c
// filter -> true, false 출력 -> c만 true 출력
// 합집합
let union = new Set([...a].concat(...b))
// concat 이어 붙임
// 차집합
let dif = new Set([...a].filter(x => !b.has(x)));