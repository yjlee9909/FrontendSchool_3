// this 값을 사용자의 의도대로 조작하기
// apply(), call(), bind() - 고정
// call() 인자 값이 한개
// apply() 인자 값이 두개

// call()
var peter = {
    name : 'Peter Parker',
    sayName : function(){    
        console.log(this.name);
    }
}

var bruce = {
    name : 'Bruce Wayne',
    // sayName : function(){    
    //     console.log(this.name);
    // }
}
peter.sayName.call(bruce); // -> Bruce Wayne
peter.sayName() // Peter Parker인데 이거를 call 하는 사람이 burce임 
// bruce.sayName()해서 안에 sayName부여하는게 더 좋을듯...
  // peter.sayName.call(bruce) 의 결과는 무엇이 될지 생각해 봅시다.


  // call에 인자 값 부여하기 '!'
// peter.sayName.call(bruce, '!'); -> sayName : function(느낌표){    
//     console.log(this.name + 느낌표); 로 값 전달 가능
// }


// apply()
var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
        console.log(this.name+ ' is '+ is + ' or ' + is2);
    }
}

var bruce = {
    name : 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']); // bruce가 sayName 호출할 것
// 세이네임 호출하는 애는 브루스

/* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고 
  apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */


  // bind() this가 고정된 새로운 함수를 반환
function sayName(){
console.log(this.name);
}

var bruce = {
name: 'bruce',
sayName : sayName
}

var peter = {
name : 'peter',
sayName : sayName.bind(bruce) // bruce에 bind하겠다. -> bruce가 호출한것
}

sayName(); // window 출력
peter.sayName(); // 
bruce.sayName();

/* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */


