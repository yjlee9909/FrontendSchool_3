class Vendingmachine {
    constructor() {
        const vMachine = document.querySelector('.vending-machine');
        this.balance = vMachine.querySelector('.txt-balance');
        this.itemList = vMachine.querySelector('.list-item');
        this.inputCostEl = vMachine.querySelector('.inp-put');
        this.btnPut = vMachine.querySelector('.btn-put');
        this.btnReturn = vMachine.querySelector('.btn-return');
        this.btnGet = vMachine.querySelector('.btn-get');
        this.stagedList = vMachine.querySelector('.list-item-staged')
        
        const myinfo = document.querySelector('.my-info');
        this.myMoney = myinfo.querySelector('.txt-mymoney');
        this.gotList = myinfo.querySelector('.list-item-staged');
        this.txtTotal = myinfo.querySelector('.txt-total');
    }
    setup() {
        this.bindEvents();
    }

    // 선택한 음료수 목록 생성
    stagedItemGenerator(target) {
        const stagedItem = document.createElement('li');
        stagedItem.dataset.item = target.dataset.item;
    }

    bindEvents() {
        /*
         * 1. 입금 버튼 기능
         * 입금액을 입력하고 입금 버튼을 누르면 소지금 == 소지금 - 입금액, 잔액 == 기존 잔액 + 입금액이 됩니다.
         * 입금액이 소지금 보다 많다면 실행을 중단하고 "소지금이 부족합니다." 라고 쓰인 경고창을 띄웁니다.
         * 입금액 인풋창은 초기화됩니다.
         * */
        // function일 때의 this는 이벤트가 걸린 타겟
        // 화살표 함수일떄의 this는 자기를 둘러싸는 상위 공간
        this.btnPut.addEventListener('click', (event) => {
            // 금액 입력한 값 가져오기
            const inputCost = parseInt(this.inputCostEl.value);
            // 소지금에서 뺴기 (textContent -> textNode에 접근)
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));

            // 입금액이 존재하는지 확인하기
            if(inputCost) {
                // 입금액이 소지금보다 적은 경우
                if(inputCost <= myMoneyVal && inputCost > 0) {
                    // 소지금 차감
                    // Intl 객체 -> 텍스트로 정보 표시할때 나라마다 표기법 다르부분을 지원
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';
                    // 잔액에서 추가
                    this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + '원';
                    
                } else {
                    alert('소지금이 부족합니다.');
                }
                // 인풋창 초기화
                this.inputCostEl.value = null;
            }
        })
        /*
        * 2. 거스름돈 반환 버튼 기능
        * 반환 버튼을 누르면 소지금 == 소지금 + 잔액이 됩니다.
        * 반환 버튼을 누르면 잔액 창은 초기화됩니다.
        */
        this.btnReturn.addEventListener('click', (event) => {
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));
            // 거스름돈 반환 버튼은 잔액이 있을떄만 작동
            if(balanceVal) {
                this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoneyVal) + '원';
                this.balance.textContent = '원';
            }
        })

        /*
         * 3. 자판기 메뉴 기능
         * 아이템을 누르면 잔액 == 잔액 - 아이템 가격이 됩니다.
         * 아이템 가격보다 잔액이 적다면 "잔액이 부족합니다. 돈을 입금해주세요" 경고창이 나타납니다.
         * 아이템이 획득가능 창에 등록됩니다.
         * 아이템 버튼의 data-count 값이 -1 됩니다.
         * 만약 data-count 값이 0 이라면 부모 li에 sold-out 클래스를 붙여줍니다.
        */
        const btnsCola = this.itemList.querySelectorAll('button');
        // console.log(btnsCola);
        btnsCola.forEach((item) => {
            item.addEventListener('click', (event) => {
                // console.log(event.currentTarget);
                const targetEl = event.currentTarget;
                // 잔액 까기
                const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));
                // 콜라 이미 선택했는지 확인하기
                let isStaged = false;
                // 콜라 가격
                const targetElPrice = parseInt(targetEl.dataset.price);
                // 콜라 비교
                const stagedListItem = this.stagedList.querySelectorAll('li');

                // 잔액 > 1000
                if (balanceVal >= targetElPrice) {
                    // 잔액
                    this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + '원';

                    // 클릭한 아이템 생성하기
                    // false -> true 선택되었을 때
                    if (!isStaged) {
                        this.stagedItemGenerator(targetEl);
                    }
                    // 클릭한 아이템이 이미 존재하는지 비교
                } else {
                    alert('잔액이 부족합니다. 돈을 입금해주세요');
                }
            })
        })

    }
}

export default Vendingmachine;