const list = [1, 2, 3, 4];
const double = (x) => {
  return x ** 2;
};
const test = list.map(double);
window.console.log(test);
//----------------------------------------------
const names = ["lee", "kim", "park"];
const one = (x) => {
  return x.toUpperCase();
};
const cut = names.map(one);
window.console.log(cut);
//-----------------------------------------------

const pList = [
  { name: "홍길동", age: 16 },
  { name: "김철수", age: 17 },
];
