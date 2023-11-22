const values = [1,2,3,4,5]

// 함수 선언 (rest 사용)
function get(a,b,...rest){
    console.log('a >', a);
    console.log('b > ',b);
    console.log('rest > ',rest);
}

// 함수 호출
get(...values);
get(values);

// 2. 객체에서 rest
const icecream = {
    flavor: 'choco',
    price: 1000,
    company: 'binggre'
}

const { flavor, ...rest} = icecream;
console.log(flavor);
console.log(rest);

// 3. 배열에서 rest
const number = [1,2,3,4,5,6];
const [one,two, ...rest1] = number;

console.log(one);
console.log(two);
console.log(rest1);