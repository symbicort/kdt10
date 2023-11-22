const add = (a,b) => a+b;
const PI = 3.141592;
const E = 2.718;

module.exports = {
    add: add,
    PI: PI,
    E: E
}

// 하나씩 내보내기
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.E = E;

// // 위에 꺼 생략
// exports.add = add;
// exports.PI = PI;
// exports.E = E;