function print(a: number, b: number, c?: number): void {
  console.log('a = ', a);
  console.log('b = ', b);
  console.log('c = ', c);
}

// print(2, 4, 6);
// print(5, 7);

// 매개변수에 기본값 할당 가능
function print2(a: number, b: number, c = 50): void {
  console.log('a = ', a);
  console.log('b = ', b);
  console.log('c = ', c);
}

print2(2, 4, 6);
print2(5, 7);

function printHello(): void {
  console.log('hello');
}

printHello();

function sayHello(): string {
  return 'hello';
}

console.log(sayHello());

function returnNum(): number {
  return 100 + 100;
}

console.log(returnNum());

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(500, 250));

const sum2 = (a: number, b: number): number => {
  return a + b;
};

const sum3 = (a: number, b: number): number => a + b;

interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const dowha: Greet = {
  name: 'dowha',
  hi() {
    return '여기는' + this.name + '캠퍼스';
  },
  bye(a: number) {
    return `잘 가라는 인사를 ${a} 번 함`;
  },
};

console.log(dowha.hi());
console.log(dowha.bye(5));

const sum1 = (a: number, b: number): void => {
  console.log(a + b);
};

console.log(sum(5, 11));
