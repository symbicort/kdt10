// math2 모듈을 불러와서 사용
const math2 = require('./math2');
console.log(math2.add(3,4));
console.log(math2.E);

const { add, PI, E} = require('./math2');
console.log(PI);