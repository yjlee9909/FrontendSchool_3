let data = {
    'one' : '하나',
    'two' : '둘',
    'three' : '셋',
    'four' : '넷'
}
let data2 = [10,20,30,40];
// key가 하나씩 들어감 for in
for (const i in data) {
    console.log(i);
}
// value까지 출력
for (const i in data) {
    console.log(i);
    console.log(data[i]);
}
// 배열은 인덱스 출력, object는 key 출력!!!
for (const i in data2) {
    console.log(i);
}

let data3 = {
    0 : 10,
    1 : 20,
    2 : 30,
    3 : 40
}
for (const i in data3) {
    console.log(i);
}

// in은 key 값 순차적으로 출력
for (const i in 'hello world') {
    console.log(i);
}

// for of는 데이터 뽑아옴
for (const i of data2) {
    console.log(i);
}
// of 는 데이터 값 순차적으로 뽑아옴
for (const i of 'hello world') {
    console.log(i);
}

// of는 데이터를 뽑아옴
let s = 0;
for (const i of '12345') {
    s += parseInt(i);
}

const seat = [['피카츄' , '라이츄', '파이리' ],
			['꼬부기' , '버터플', '야도란' ],
            ['피죤투' , '또가스', '메타몽' ]];

//for 문 사용
for (let i = 0; i < seat.length; i++) {
    const row = seat[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

//for of 문 사용
for (let row of seat) {
    for (let pocketmon of row) {
        console.log(pocketmon);
    }
}


// 질문
const object = {
    one: 1,
    two: 2,
    three: 3,
    log2 : (data) => {
        console.log(data);
    } 
}
const 변수 = 'one'

console.log(object.a); // undefined
console.log(object.one) // 1
console.log(object[변수]); // 1
console.log(object["one"]) // 1
object["log2"]('안녕하세요') // '안녕하세요' 가 출력됩니다.

/* why?
. 접근법은 object에 해당 키가 존재해야만 접근할 수 있습니다.
[] 접근법은 변수를 이용할 수 있습니다.
즉 어딘가에서 계산하거나 구해진 자료를 넣었을 때, 그게 key 값과 같다면 출력됩니다.
*/