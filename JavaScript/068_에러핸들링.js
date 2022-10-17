try {
    // code
} catch(에러메시지) {
    // code
} finally {
    // code
}

// new Error(message);
// new SyntaxError(message);
// new ReferenceError(message);

/////
try {
    let x = 10;
    let y = 20;
    console.log(x+y);
} catch(에러메시지) {
    // code
    console.error(에러메시지);
} finally {
    // code
    console.log('finally');
}
// 30
// finally

/////////
try {
    let x = 10;
    let y = 20;
    console.log(x+y+z);
} catch(에러메시지) {
    // code
    console.error(에러메시지);
} finally {
    // code
    console.log('finally');
}
// ReferenceError: z is not defined
// finally
// 2개 비교해보기 console.log, console.error
try {
    let x = 10;
    let y = 20;
    console.log(x+y+z);
} catch(에러메시지) {
    // code
    console.log(에러메시지);
} finally {
    // code
    console.log('finally'); // 서비스 정상 작동하지만 대신 일부 기능이 수행이 안될 수 있다
} // 마지막까지는 동작함

let x = 10
let y = 20
console.log(x+y+z) // 일부러 error를 만들었을 때
let z = 30
// 서비스 멈춤

a() // 로고 받아오기 메서드 - 길동
b() // 상품 정보 받아오기 메서드 - 철수
c() // 장바구니 구현 함수 - 둘리

// a()에서 문제가 발생되었을 경우 b(), c()


try {
    let x = 10;
    let y = 10;
    throw new Error('애러야!')
    console.log(x + y + z)
} catch(e) {
    console.error(e)
    console.dir(e)
    console.error(e.message)
} finally {
    console.log('end')
}


try {
    let x = 10;
    let y = 10;
    throw new SyntaxError('문법 애러야!')
    console.log(x + y + z)
} catch(e) {
    console.error(e)
    console.error(e.message)
} finally {
    console.log('end')
}


function sum(a, b){
    return a + b
}


// test code
// sum(1, 1)
// sum('1', 1)
// sum(1, '1')
// sum(undefined, null)
// ...

try{
    sum(1, 1)
}