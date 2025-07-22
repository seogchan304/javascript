// 일반 함수[구문법]
function plus100(x) {
  return x + 100;
}
// 화살표 함수[신문법]
const plus100 = (x) => {
  return x + 100;
};

const double = (x) => {
  return x * 2;
};

const minus500 = (x) => {
  return x - 500;
};

const xy = (x, y) => {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

const stringWidth = (x) => {
  return x.length > 10 ? "길이가 길어요!" : "적당합니다";
};

//6. str를 주면, str을 하다니 럭키비키잖아를 돌려주는 함수

const luck = (str) => {
  return `${str}을 하다니 럭키비키잖아`;
};

//7.x,y를 주면, x의 y제곱을 돌려주는 화살표 함수

const math = (x, y) => {
  return x ** y;
};

//8. x, y를 주었을 때, 두 수의 차를 돌려주는 화살표 함수

const minus = (x, y) => {
  return x - y;
};

//9. str을 주었을 때, a or b 가 포함하면 a, b 포함! 아니면 a,b 미포함!

const ab = (str) => {
  if (str.includes("a") || str.includes("b")) {
    return "a, b 포함!";
  } else {
    return "a, b 미포함!";
  }
};

//10. x를 주었을 때, x의 배수를 리스트(array)로 돌려주는 함수
//ex) 5 -> [5,10,15,...,45]

const quiz10 = (x) => {
  return [x * 1, x * 2, x * 3, x * 4, x * 5, x * 6];
};

//11. sstr, x를 주었을 때, str의 0번째 부터 x번째까지의 문자열을 돌려주는 함수
//ex) apple, 3 -> appl
