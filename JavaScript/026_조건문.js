if (조건식) {
    // 조건식이 참일 경우 실행될 코드
}

if (true) console.log("중괄호를 생략했습니다.");

let 조건식1 = true;
let 조건식2 = true;
if (조건식1) {
    // 조건식1이 참(true)일 경우 실행될 코드
    console.log("1");
} else if (조건식2) {
    // 조건식1이 거짓(false)이고 조건식2가 참(true)일 경우 실행될 코드
    console.log("2");
} else {
    // 조건식1, 2 모두 거짓일 경우 실행될 코드
    console.log("3");
}

///

let money = 1000;
let score = 89;
if (score > 90) {
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "i\'m happy"');
    money += 100000;
} else if (score > 70) {
    console.log('mom : "happy?"');
    money += 10000;
}
else if (score > 60) {
    console.log('mom : "happy?"');
    money += 10000;
} else {
    console.log('mom : "..."');
    money = 0;
}

///
///


if (score > 90) {
    if(money >= 10000000) {
        money -= 1000000;
    }
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "i\'m happy"');
    money += 100000;
} else if (score > 70) {
    console.log('mom : "happy?"');
    money += 10000;
}
else if (score > 60) {
    console.log('mom : "happy?"');
    money += 10000;
} else {
    console.log('mom : "..."');
    money = 0;
}

//
if(money >= 10000000) {
    money -= 1000000;
}
if (score > 90) {
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "i\'m happy"');
    money += 100000;
} else if (score > 70) {
    console.log('mom : "happy?"');
    money += 10000;
}
else if (score > 60) {
    console.log('mom : "happy?"');
    money += 10000;
} else {
    console.log('mom : "..."');
    money = 0;
}

// 스위치문
let value3 = 'three';

switch (value3) {
    case 'one' :
        // 실행할 코드
        console.log(1);
        break;
    case 'two' :
        // 실행할 코드
        console.log(2);
        break; 
    case 'three' :
        // 실행할 코드
        console.log(3);
        break;
    case 'four' :
        // 실행할 코드
        console.log(4);
        break;

}
///

switch (value3) {
    case 'one' :
        // 실행할 코드
        console.log(1);
        
    case 'two' :
        // 실행할 코드
        console.log(2);
        
    case 'three' :
        // 실행할 코드
        console.log(3);
        
    case 'four' :
        // 실행할 코드
        console.log(4);
        

}