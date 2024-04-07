function printSome<T>(x: T, y: T): T {
  console.log(x);
  console.log(y);
  return y;
}

printSome<number>(1, 2);
printSome<string>("hi", "hello");

function printSome2<T, K>(x: T, y: K): void {
  console.log(x);
  console.log(y);
}

printSome2<number, string>(1, "안녕하세요");

function arrLength(arr: any[]): number {
  return arr.length;
}

function getValue1(value: any): any {
  return value;
}

function arrLength2<F>(arr: F[]): number {
  return arr.length;
}

function getValue2<F>(value: F): F {
  return value;
}

console.log(arrLength2<string>(["a"]));
console.log(arrLength2<number>([1, 2, 3, 4]));
console.log(getValue2<number[]>([1, 2, 3, 4]));

function arrElement<F>(arr: F[], index: number): F | boolean {
  if (index >= arr.length) {
    return false;
  } else {
    return arr[index];
  }
}

console.log(arrElement<string>(["a"], 1));
console.log(arrElement<number>([1, 2, 3], 2));

interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

const iphone15: Phone<string> = {
  company: "apple",
  createAt: new Date("2023-10-13"),
  option: "black",
};

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<iphoneOption> = {
  company: "apple",
  createAt: new Date("2024-10-06"),
  option: {
    color: "silver",
    storage: 256,
  },
};

console.log(iphone15);
console.log(iphone16);

// 타입스트립트는 초기화된 값을 바탕으로 타입을 자동추론함
let aa = 1;
let bb = "string";
let cc = true;

// aa="안녕하세요"; //불가능(aa가 number형으로 자동추론됨)
