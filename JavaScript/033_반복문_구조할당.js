let value = [10, 1, 100, 200, 300, 10];
let value2 = {
    one:1,
    two:2,
    three:3,
    four:4
}
Object.keys(value)
//(6) ['0', '1', '2', '3', '4', '5']


for (i in value2) {
    console.log(i);
}
// one two three four
// for of로 순회를 돌 수가 없음
// of로 순회를 돌아야 키와 벨류를 한꺼번에 출력하고 싶음
for (i of value2) {
    console.log(i);
} // 안됨
// key:value 쌍 출력
Object.entries(value) 
Object.entries(value2);

for(i of Object.entries(value2)) {
    console.log(i);
}
// (2) ['one', 1]
// VM487:2 (2) ['two', 2]
// VM487:2 (2) ['three', 3]
// VM487:2 (2) ['four', 4]
// 구조분해할당
for([i,j] of Object.entries(value2)) {
    console.log(`key는 ${i}이고 value는 ${j}입니다.`);
}

for([i,j] of [[10, 20],[30, 40]]) {
    console.log(i,j);
}
// 10 20
// 30 40

for([i,j] of [[10, 20,300],[30, 40, 500]]) {
    console.log(i,j);
}
// 10 20
// 30 40 // 300과 500을 받지 못함.

for([i,j,...k] of [[10, 20,300,1,2],[30, 40, 500,1]]) {
    console.log(i,j,k);
}
// 나머지를 k가 받도록 ... 전개 구문식 사용
//10 20 (3) [300, 1, 2]
//30 40 (2) [500, 1]

for([[i,j],k] of [[[10, 20],300],[[30, 40], 500]]) {
    console.log(i,j,k);
}
// 10 20 300
// 30 40 500

for([i,j] of [[[10, 20],300],[[30, 40], 500]]) {
    console.log(i,j);
}
// [10, 20], 300
// [30, 40], 500

// 일반 변수 선언의 구조분해할당
let a, b, c
[a,b] = [10,20]; // a = 10, b = 20으로 할당됨

let one, two, three;
[one, two, three] = '010-0000-1234'.split('-');

let one1, two1, three1, four1;
[one1, two1, three1, ...four1] = '010-0000-1234-01-02-03'.split('-');

// four1
// (3) ['01', '02', '03']

data = [10, 20, 30, 40, 50];
// 문제 1 
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20, 30, 40, c에는 50을 할당해보세요.
[a, ...b, c] = [10, 20, 30, 40, 50] // (X)
[a, b, c] = [data[0], [data[1], data[2], data[3]], data[4]]; // O

// 문제 2
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, 20, 30, b에는 40, c에는 50을 할당해보세요.
[...a, b, c] = [10, 20, 30, 40, 50] // (X)
[a, b, c] = [[data[0], data[1], data[2]], data[3], data[4]]; // O

// 문제 3 (정상 작동)
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20 c에는 30, 40, 50을 할당해보세요.
[a, b, ...c] = [10, 20, 30, 40, 50]

let data = {
    name : 'lee',
    age : 10,
    money : 100
}
let {name, age} = data;

let {name, age} = {name:'hojun', age:'10'};

let data = {
    name : 'lee',
    age : 10,
    money : 100,
    company : 'weniv'
}
let {name, age, ...rest} = data;

// 순서를 뒤바꿔 봅시다.
let data = {
    name : 'lee',
    
    money : 100,
    company : 'weniv',
    age : 10
}
let {name, age, ...rest} = data;
// age순서가 바껴도 10이 들어가는 이유 -> 같은 변수명을 가져서 맵핑됨

// rest
// {money: 100, company: 'weniv'}

// RORO 기번 (나중에) 등의 디자인 패턴에서도 구조분해할당을 많이 사용

let a = [10, 20, 30];
a.push(100);

a.unshift(1000);
// [1000, 10, 20, 30, 100]

a = [1000, ...a, 100]

let a = [1,2,3]
let b = [10,20,30]
let c = [...a, ...b]; // [1, 2, 3, 10, 20, 30]
// 다시 구조분해할당 가능

let str = 'hello world';
console.log([str]); // ['hello world']

let str = 'hello world';
console.log([...str]); // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

'!'.repeat(10);
[...'!'.repeat(10)];
// ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!']

