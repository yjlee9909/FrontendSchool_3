// 싱글톤 패턴 : 오직 하나의 인스턴스만을 생성해야할 때 필요한 패턴
// class Test {
//     constructor() {}
// }

// const test1 = new Test();
// const test2 = new Test();
// console.log(test1 === test2); // false

/////
class Singleton {
    constructor(data) {
        this.data = data;

        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }
        this.constructor.instance = this;
    }
}

// const singleton = new Singleton();
// console.log(singleton.constructor);

const test1 = new Singleton();
const test2 = new Singleton();
console.log(test1 === test2);
// true
// 최초의 인스턴스를 가리키도록 (새로운 객체를 생성하지 않도록)
// test1에는 10, test2에는 50이어도 결국 처음 데이터 값을 가진다 (10 출력)
