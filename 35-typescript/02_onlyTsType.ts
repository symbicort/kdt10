// Tuple
let drink: [string, string] = ['cola', 'cider'];
drink[1] = '콜라';
drink[0] = '사이다';
// drink[2] = '환타' Tuple의 한게를 넘기 떄문에 에러 ㅂ라생
drink.push('환타'); // 요소 추가는 가능하지만 Tuple 타입을 사용하는 이유가 사라지게 됨

console.log(drink);

// readonly: 요소 타입과 순서와 길이를 고정
let drink2: readonly [string, number] = ['사이다', 1500];

// drink.push('환타'); //type error

// enum type
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

console.log(Auth.guest);

enum Cafe {
  americano = '아메리카노',
  lette = '라떼',
}

enum Cake {
  choco,
  cream,
  fruit,
}

console.log(Cake.choco);
console.log(Cake.fruit);

// 명시적으로
let value: any;
value = 1;
value = 'str';
value = false;
value = null;
value = [1, 2, '3', ['a', 'b']];

// 암묵적
let value2;
value2 = 100;
value2 = 'str2';
value2 = true;
value2 = null;
value2 = ['a', 'b', 5, { name: 'mac' }];

// let olimpic_newgame: readonly [object, boolean] = [
//   {
//     name: '쇼트트랙',
//     type: '혼성 계주',
//   },
//   true,
// ];

// olimpic_newgame[1] = false;

// type & interface

// interface
interface Student {
  name: string;
  isPassed: true;
}

const student: Student = {
  name: 'dlfma',
  isPassed: true,
};

// object 타입 사용 시 key의 value의 타입을 지정하지 않음
const student2: Student = {
  name: 'what',
  isPassed: true,
};

// interface 상속
enum Score {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

interface BaseballClub extends Student {
  position: string;
  height: number;
  backNumber?: number;
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: '오타니',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  backNumber: 17,
  1: Score.A,
};

console.log(otani);

interface Toy {
  name: string;
  price: number;
}

interface Car {
  name: string;
  price: number;
  color: string;
}

type ToyCar = Toy & Car;

const toycar: ToyCar = {
  name: 'tayo',
  price: 56000,
  color: 'blue',
};

type Person = {
  name: string;
  age: number;
  hobby: string[];
};

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};

let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};
