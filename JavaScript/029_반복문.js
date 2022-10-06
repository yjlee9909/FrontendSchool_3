// 에어비앤비 컨벤션 -> for문 사용 금지
// for of, for in등 명확한 for문을 사용해라

// for문, for in문, for of문

// i= 0 부터 10보다 작을때까지 ++
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// 바깥에 i 찍으면 안나오는 이유
// 안에서 선언한 변수는 밖에서 사용 불가능 let, const - 블록레벨 스코프
//블록레벨 스코프

// <-> 렉시컬 스코프

// airbnb 컨벤션에 권장 (IE 전부 사용 가능)
for (const i in ['one','two','three']) {
    console.log(i);
}

// airbnb 컨벤션에 권장 (IE에서 전부 사용 불가)
for (const i of ['one','two','three']) {
    console.log(i);
}

console.log("---------");
if(true) {
    var a = '1';
    let b = '2'; // 에러 if 밖에서 쓸 수 없다. (블록레벨 스코프)
    const c = '3'; // 에러 if 밖에서 쓸 수 없다. (블록레벨 스코프)
}
console.log(a);
console.log(b);
console.log(c);

for (let i = 0; i < 10; i++) {
    // i라는 변수를 스코프마다 잠굽니다.
    var a = '1';
    let b = '2'; // 에러 if 밖에서 쓸 수 없다. (블록레벨 스코프)
    const c = '3'; // 에러 if 밖에서 쓸 수 없다. (블록레벨 스코프)
    console.log(i);
}
console.log(a);
console.log(b); // 에러
console.log(c); // 에러

// var는 밖에서 출력이 가능하지만 이제는 var를 안쓴다.

console.log("----구구단-----");
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i > 3) {
        break;
    }
}
// 0,1,2,3,4

let data1 = ['a','b','c','d','e'];
for (let i = 0; i < data1.length; i++) {
    console.log(data1[i]);
}
// a b c d e
// 5 미만까지 (인덱스는 4까지 존재)

let data2 = [1,3,4,8,13,17,20];
            //[3,4,8,13,17,20]
            // 쌍으로 구해서 sort로 두 수 비교하기...
for (let i = 0; i<data2.length; i++) {
    console.log(data2[i+1] - data2[i]);
} // data2[i+1]은 인덱스 범위를 넘어감.

let data3 = [1,3,4,8,13,17,20];
for (let i = 0; i<data3.length-1; i++) {
    console.log(data3[i+1] - data3[i]);
} 

let data4 = [1,3,4,8,13,17,20];
for (let i = 1; i<data4.length; i++) {
    console.log(data4[i] - data4[i-1]);
} 

// 무한 반복
let i = 0;
for(;;) {
    i++;
    console.log(i);
    if(i>5) {
        break;
    }
}


for(let i = 0;;) {
    i++;
    console.log(i);
    if(i>5) {
        break;
    }
}
// 다음 수학점수의 평균을 구하세요.

// 내 풀이
let 수학점수 = [10, 99, 88, 85, 21, 35];
let sum = 0;
for (let i = 0; i < 수학점수.length; i++) {
    sum += 수학점수[i]; 
}
console.log(sum/수학점수.length);

// 작업을 한다.
let s = 0
수학점수.forEach((value => s += value));
console.log(s/수학점수.length);
// 누적한다.
console.log(수학점수.reduce((a,b)=> a + b, 0)/6);

//
let s2 = 0;
for (let i = 0; i < 수학점수.length; i++) {
    s2 += 수학점수[i];
}
console.log(s2/수학점수.length);

//
let user = [
    {
      "_id": "633e5b1711926cc42d1fbb4b",
      "index": 0,
      "guid": "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
      "age": 28,
      "name": "Mai Montoya",
      "gender": "female"
    },
    {
      "_id": "633e5b1718d6c001d2f771c7",
      "index": 1,
      "guid": "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
      "age": 22,
      "name": "Shelley Potts",
      "gender": "female"
    },
    {
      "_id": "633e5b17fecc26a897aa2283",
      "index": 2,
      "guid": "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
      "age": 22,
      "name": "Hensley Flores",
      "gender": "male"
    },
    {
      "_id": "633e5b17267fe16c24f00591",
      "index": 3,
      "guid": "6e189d90-0981-4086-9ee2-12242fda76d1",
      "age": 20,
      "name": "Holmes Morrow",
      "gender": "male"
    },
    {
      "_id": "633e5b17b30766b9c38594f5",
      "index": 4,
      "guid": "f1505113-9383-4249-bbb3-0e5f8ea634b2",
      "age": 25,
      "name": "Elisa Miller",
      "gender": "female"
    }
  ]

// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }

let 여성 = 0;
for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
    if(user[i]['gender']==='female') {
        여성 += 1;
    }
}
console.log(여성);

// user : 배열
// user[i] : 객체
// user['gender'] : string

console.log(user.length - 여성);

//
user.filter(i => i.gender === 'female').length; 


// 암기를 부탁드립니다. (재귀함수 할 때 비교할 for 문)
// 구구단
for (let 단 = 2; 단 <10; 단++) {
    for (let 곱 = 1; 곱 < 10; 곱 ++) {
        console.log(`${단} X ${곱} = ${단*곱}`);
    }
}

// 1. 문자열 뒤집기
let txt = 'hello world';
let result = '';
for (let i = txt.length -1; i >= 0; i--) {
    result += txt[i];
}

let txt1 = 'hello world';
let result1 = '';
for (let i = 0; i<txt1.length; i++) {
    result1 = txt1[i] + result1;
}

// 2. 시그마
// 1~100 까지 더하기
let s1 = 0;
for (let i = 1; i < 101; i++) {
    s1 += i;
}

// 3. 팩토리얼
let s3 = 1;
for (let i = 1; i < 6; i++) {
    s3 *= i;
}

// 다음 입력된 숫자들의 합을 구하라
// input : '1234';
// result : 10
let xx = '12345';
let result10 = 0;

for (let i = 0; i < xx.length; i++) {
    result10 += parseInt(xx[i]);
}
console.log(result10);

// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.

Array(100).fill(0).map((_, index) => (index + 1).toString())
Array(100).fill(0).map((_, index) => (index + 1)).join('')

let x20 = Array(100).fill(0).map((_, index) => (index + 1)).join('')
let result20 = 0;
for (let i = 0; i < x20.length; i++) {
    if(x20[i] === '8'){
        result20 += 1;
    }
}
