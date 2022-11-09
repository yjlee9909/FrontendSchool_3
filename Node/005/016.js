// import a from './015.js';

// default는 d에만 붙어있어서 d 값만 출력됨 (우선적으로)
// a();

//
// import {a, b, c} from './015.js';
// a();

// import * as all from './015.js';
// console.log(all);
// console.log(all.default());

import d, {a, b, c} from './015.js';
d()