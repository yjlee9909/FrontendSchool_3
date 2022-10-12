// 생성자 new를 이용해 object의 this 를 받음
let m = new Map();
m
    .set('하나', 1)
    .set('듈', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1,2], '리얼리?'); 
    
    //. - 메소드 체이닝

console.log(m);
// {'하나' => 1, '듈' => 2, '셋' => 3, '넷' => 4}
// 꺼내기
console.log(m.get('하나')); // 1
console.log(m.get(true)); // object에서 불가능
console.log(m.get([1,2])); // undefined

// Python VS JavaScript
// 1. Python
// python에서 아래 값은 다르게 나옵니다.
// x = [1, 2]
// id(x)

// y = [1, 2]
// id(y)

// x == y // python에서는 true
// x is y // python에서는 false

// 2. JavaScript
// [1, 2] === [1, 2] //false
// [1, 2] == [1, 2] // false
// let x = [1, 2]
// let y = [1, 2]
// x == y // false
// x === y // false

/////////
// Map에 해당 키값이 있는지 확인하기 - 요소 탐색
m.has('하나'); // true, false 중 나옴

// IE고려 하지 않고 Map을 추구!!
// Map에 값을 제거하기
m.delete('하나');

// 크기 구하기 
m.size;
// obejct.length는 없다!!!! map은 size로 대체 가능!!!

// map 생성하기
// 1. 기존 object에서 map 변환하기
let data = {'one':1, 'two':2};

let data = new Map([['one',1],['two',2]]); // O
let data = new Map(Object.entries({'one':1,'two':2})); // O

let data = new Map('hello world'); // X
let data = new Map([10,20,30,40]); // X

// map은 직접 순회가 가능하다!!!!!!
let data = {'one':1, 'two':2};;
for (const i of data) { // X 작동되지 않습니다.
    console.log(i);
    
}
let m = new Map();
m
    .set('하나', 1)
    .set('듈', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1,2], '리얼리?'); 

for (const [i,j] of m) { // [i,j] -> 구조분해할당
    console.log(i);
}
m.keys() // 가능
m.values() // 가능
m.entries() // 가능 ---> 원래는 다 Object.로 시작했어야 함
// 이것이 바로 map
// Map - Object 간의 형변환
let 맵 = new Map(Object.entries({'one':1,'two':2}));
let 오브젝트 = Object.fromEntries(맵);

// 맵과 object 100만개 순회 test

// 바벨을 사용하게 된다면 구 표준 준수하는 코드로 바뀜 -> 회사에 따라 다름
