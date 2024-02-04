// 모듈을 불러서 사용
//가지고 오고 싶은 함수/변수만 구조분해할당을 이용해서 가져올 수 있음
const { sayName } = requier("./exports1.js");
// 한 번에 가져오기 ( 객체로 불러옴)
const exports1 = requier("./exports1.js");

// sayName('DJ')
console.log(exports1);
exports1.sayName("DJ");

const { sayHi2, sayHi3 } = requier("./exports2.js");
sayHi2();
sayHi3("안녕하세요");
