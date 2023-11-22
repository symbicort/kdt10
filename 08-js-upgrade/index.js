// 구조분해할당

// const { name } = require("ejs");

// 1. 배열 구조분해 할당
// - 순서가 중요함

const arr1 = [1,2,3,4,5];
const arr2 = ['a','b','c'];

const [one,two,three,four,five] = arr1;

console.log(one,two,three,four,five);
const [x,y,z,alpha] = arr2;
console.log(x,y,z,alpha);

const list = ['apple','orange'];
const [f1,f2,f3 = 'banana'] = list;
console.log(f1,f2,f3);

let num1 = 1, num2 = 2;
console.log('swap 전 >', num1,num2);
[num1,num2] = [num2, num1] 
console.log('swap 후 >', num1,num2);

// 2. 객체 구조분해 할당
// - 키값과 변수명이 일치
const obj = {
    title: '독전2',
    star:1,
    content: '제발 보지마라...'
}
// 구조분해 x
console.log(obj.content, obj.star,obj.title)

// 키가 존재하지 않는 경우 대비하여 default 값 할당
const {title, content, star,price = 10000} = obj;
console.log(title,content,star,price);

// 콜론을 이용해서 새 변수명으로 바꿔서 저장 가능
const {content: c1, star: s1, title:t1} = obj;
console.log(c1,s1,t1);

// ---- example

const info = {
    name : 'web-fullstack',
    time: '09-14',
    content: 'node.js'
}

function getInfo(lecture){
    // 구조분해 할당 사용하여 값 추출
    const {name, time, content} = lecture;
    // 출력 문장 생성
    const output = `과정명 : ${name}, 시간: ${time}, 배우는 과정: ${content}`
    // 출력 문장 리턴
    return output;
}
const result = getInfo(info);
console.log(result);

// 단축평가
// $$, ||
// a && b : 두 개의 피연산자 모두 true 면 true 를 반환
// a || b : 두개의 피연산자 중 하나만 true여도 true를 반환

console.log(true && true); 
console.log(true && false); 
console.log(true || false);
console.log(false || true);

// &&(논리곱)
const v1 = 5;
const v2 = 7;

const result2 = v1 > v2 && 'v1이 큼';
console.log(result2);

const result3 = v1 < v2 && 'v2가 큼';
console.log(result3);

// || (논리합)
const result4 = 100 || v1;
console.log(result4);

const nameEx = '홍길동';
const nameEx2 = null;

console.log(nameEx || '이름x');
console.log(nameEx2 || '이름x');