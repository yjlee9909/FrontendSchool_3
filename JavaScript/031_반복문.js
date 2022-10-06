// while(조건문) {
	//실행문;
//}
while(true) {
    console.log(무한반복);
}

let i = 2;
let j = 1;
while (i < 10) {
    while(j<10) {
        console.log(`${i} X ${j} = ${i*j}`);
        j++;
    }
    // while문 탈출해도 아직도 j는 10인 상태이다.
    j = 1;
    i ++;
}

// 원소 순회
let value = [10,20,30,40];
let x = 0;
while (x < value.length) {
    console.log(value[x]);
    x++;
}

// break문 -> 해당 반복문을 탈출
let i = 2;
let j = 1;
while (i < 10) {
    while(j<10) {
        console.log(`${i} X ${j} = ${i*j}`);
        j++;
    }
    // while문 탈출해도 아직도 j는 10인 상태이다.
    j = 1;
    if(i==4) {
        break;
    }
    i ++;
}

// continue문 다음 루프로 갑니다.
// 다음 반복문으로 감
// 무한 반복
let i = 2;
let j = 1;
while (i < 10) {
    while(j<10) {
        console.log(`${i} X ${j} = ${i*j}`);
        j++;
    }
    // while문 탈출해도 아직도 j는 10인 상태이다.
    j = 1;
    if(i==4) {
        continue;
    }
    i ++;
}

let i = 2;
let j = 1;
while (i < 10) {
    i ++;
    // 다음 반복문으로 -> i=5로 넘어감
    if(i==4) {
        continue;
    }
    while(j<10) {
        console.log(`${i} X ${j} = ${i*j}`);
        j++;
    }
    // while문 탈출해도 아직도 j는 10인 상태이다.
    j = 1;
}

for (let i = 0; i < 10; i++) {
    if(i==4 || i==5) {
        continue;
    }
    console.log(i);
}

// 레이블!!! (사용 권장 안함)

// 루프가 몇개든 원하는 위치로 바로 감
// 탈출할 공간을 명시해주면 됨
timestable:
for (let x = 2; x < 10; x++) {
	for (let y = 1; y < 10; y++) {
		if (x === 4) break timestable;
		console.log(`${x} X ${y} = ${x * y}`);
	}
}

// 그냥 break만 쓰면 그 한 루프만 넘어감 (현재의 블록을 바로 종료)

/* <aside>
💡 레이블 사용시 주의사항

- 레이블은 반드시 `break`문 또는 `continue`문 위에 있어야 한다.
- `break`문은 모든 레이블에서 사용할 수 있다.
- `continue`문은 반복문에서만 사용 가능하다.
</aside> */