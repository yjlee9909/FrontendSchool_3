import { plus } from "./plus.js";
import "./style.css";
import tiger from "./tiger.png";
import android from "./android.png";


console.log(plus(3, 7));
// console.log(dev);
// console.log(pro);

let env;
if  (process.env.NODE_ENV === "development") {
        env = dev;
    } else {
        env = prop;
    }
    console.log(env)
document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = `<img src="${tiger}"><img src="${android}">`;
});
