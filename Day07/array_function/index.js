// const fn1 = (x) => x * 2
// const fn2 = (x) => x **10
// const fn3 = (x) => x > 5 ? 1: 2
// const fn4 = (x) => x % 2 ? "홀수" : "짝수"
// const arr = [1,2,3,4,5].map(fn1)

//2. filter: 안에 있는 요소들 걸러내기
// - true 남기고 false 없앤다.
const b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => x <= 5);

//1. 4의 배수만 살리기
const quiz1 = [2, 4, 6, 8, 10].filter((x) => x % 4 == 0);

//2. 알파벳 a가 포함된 과일만 살리기
const quiz2 = ["apple", "mango", "grape", "kiwi"];

//3.
const quiz3 = [
  { name: "더글로리", genre: ["범죄", "사회고발", "피카레스크"] },
  { name: "오징어게임", genre: ["범죄", "스릴러", "블랙 코미디"] },
  { name: "더글로리", genre: ["로맨스", "드라마", "휴먼"] },
];
