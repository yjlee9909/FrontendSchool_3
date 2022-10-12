function a(){ 
    console.log(this); // this -> window를 가리킴 (호출해준 애가 this)
}
a();    // window.a(); -> this는 window를 가리킴

function b(){
    console.log('hello world')
}
b()
window.b()

///
let test = {
    one:1,
    two:2,
    three: function() {
        console.log(this); // this 는 test object 자체를 출력
    }
}
test.three();

let test2 = test.three(); // test2는 윈도우 호출 이때의 this는 윈도우

// 추가 예제 //

function sayName() {
    console.log(this.name);
}
var name = 'Hero'; // var 는 바로 등록하면 window에 등록됨 (window.name 가능), let, const는 예외

let peter = {
    name : 'Peter Parker',
    say : sayName  // 함수 sayName 할당
}
let bruce = {
    name : 'Bruce Wayne',
    say : sayName
}

sayName();  // Hero 출력
peter.say(); // Peter Parker // sayName의 this는 바로 위인 peter임 -> 
// 실행한 순간의 나를 호출한 녀석
bruce.say(); // Bruce Wayne ()는 함수를 실행 -> 결국 sayName 실행해라

// 함수 안의 함수에서 사용하면 부모쪽 함수를 가리키는지??
function a() {
    console.log(this.name);
    function b() {
        console.log(this.name);
    }
    b();
}
a(); 
// functoin a() {};
// a.name -> a가 찍힘!!!!!

function a() {
    console.log(this); // window
    function b() {
        console.log(this); // window
    }
    b();
}
a(); 

// . 멤버접근연산자로 가리켜야 나를 호출한 위를 가리킴 (. 앞의꺼를.... this로)

// 일반함수로 호출되면 전역객체 window를 가리킴
// 반대로 메서드로 호출되면 호출한 객체에 바인딩 됨