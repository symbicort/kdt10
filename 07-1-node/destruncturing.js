// 구조분해할당 : 구조를 분해해서 변수에 할당

// 1. 객체를 구조분해
const cookie = {
    choco: '초코맛',
    vanilla: '바닐라맛',
    mint: '민트맛'
}

console.log(cookie.choco);

const { mint, choco, vanilla} = cookie;
/*
const { mint, choco, vanilla} = {
    choco: '초코맛',
    vanilla: '바닐라맛',
    mint: '민트맛'
}
*/

console.log(vanilla);
console.log(choco);
console.log(mint);

const arr = ['first','second'];
const [one,two] = arr;
console.log(one,two);