function numArrLen(arr: number[]): number {
  return arr.length;
}

function strArrLen(arr: string[]): number {
  return arr.length;
}

console.log(numArrLen([1, 2, 3, 4]));
console.log(strArrLen(['a', 'b', 'c']));

function arrLen<T>(arr: T[]): number {
  return arr.length;
}

console.log(arrLen<number>([1, 2, 3]));
console.log(arrLen<string>(['a', 'b', 'c']));

function print3<T, U>(x: T, y: U): void {
  console.log(x, y);
}

print3<string, number>('hihi', 433);

// interface와 generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphonePro: Phone<iphoneOption> = {
  company: 'apple',
  createAt: new Date('2022-10-01'),
  option: {
    color: 'blue',
    storage: 256,
  },
};

// function arrLen<T>(arr: T[]): number {
//     return arr.length;
// //   }

console.log(iphonePro);

function arrElement<T>(arr: T[], num: number): T | boolean {
  if (arr.length < num) {
    return false;
  } else {
    return arr[num];
  }
}

console.log(arrElement<string>(['a', 'c', 'd', 'e'], 5));
