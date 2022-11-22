import {createStore} from 'redux'

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;
let count = 0;
// 리덕스로 구현해보기
const store = createStore(countReducer);



const countReducer = (state = 0, action) => {
    // state 초기화
    // if (state === undefined) {
    //     state = 0; 대신에 위에 위에 초기화시킴
    // }

    switch(action.type) {
        case 'ADD':
            return state + 1;
        case 'SUBSTRACT':
            return state - 1;
        default:
            return state;
    }
}

// UI Update - text
const updateResult = (c) => {
  number.innerText = count;
  quantity.innerHTML = c;
  totalPrice.innerHTML = c * PRICE;
};

// State Change
// const addNumber = () => {
//   count += 1;
//   minus.disabled = false;
//   updateResult(count);
// };
const addNumber = () => {
    store.dispatch({type : 'ADD'});
}

// State Change
const substractNumber = () => {
  count -= 1;
  plus.disabled = false;
  updateResult(count);
};

// Init
number.innerHTML = count;
updateResult(count);


// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);