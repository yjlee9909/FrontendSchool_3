import ColaGenerator from "./components/colaGenerator.js";
import Vendingmachine from "./components/vendingmachine.js";

// 인스턴스화하여 사용하기
const colaGenerator = new ColaGenerator();
const vendingmachine = new Vendingmachine();


// await - 기다림 top level에서 작동함
// 대상은 async여야 함 setup메서드 자체가 async여야 await로 사용 가능
await colaGenerator.setup();
vendingmachine.setup();

