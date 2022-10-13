let 인세규정 = {
    책:10,
    영상콘텐츠:50
}

function 인세계산함수(e){
    return e *(this.책/100)
}
    
[100, 200, 300].map(인세계산함수, 인세규정)
// 호출을 기준

const person = {
    name: 'hojun',
    age: 25,
    a(){
        console.log(this);
        console.log(this.name);
        function b() {
            console.log(this);
            console.log(this.name);
            function c() {
                console.log(this);
                console.log(this.name);
            }
            c()// . 멤버접근 연산자 존재하지 않으므로 this는 window
        }
        b() // . 멤버접근 연산자 존재하지 않으므로 this는 window
    }
}
person.a()

//출력
{name: 'hojun', age: 25, a: ƒ}
hojun

Window {window: Window, self: Window, document: document, name: '', location: Location, …}
''

Window {window: Window, self: Window, document: document, name: '', location: Location, …}
''