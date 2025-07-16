// const gahg = window.prompt("각도를 입력하세요(정수, 단위: 도");
// if (gahg > 0 && gahg < 90) {
//   window.console.log("예각");
// } else if (gahg == 90) {
//   window.console.log("직각");
// } else if (gahg > 90 && gahg < 180) {
//   window.console.log("평각");
// } else {
//   window.console.log("직각");
// }

// const kor = +window.prompt("국어 점수를 입력");
// const math = +window.prompt("수학 점수를 입력");
// const eng = +window.prompt("영어 점수를 입력");
// const average = (kor + math + eng) / 3;
// if (average >= 90) {
//   window.console.log("A등급");
// } else if (average >= 80) {
//   window.console.log("B등급");
// } else if (average > 80) {
//   window.console.log("C등급");
// }

const ice = 3000;
const ice1 = "아이스 아메리카노";
const lemon = 4000;
const lemon1 = "레몬에이드";
const latte = 3500;
const latte1 = "라떼";
const first = +window.prompt("음료의 종류를 고르시오 1 ~ 3");

if (first == 1) {
  drink = ice;
} else if (first == 2) {
  drink = lemon;
} else if (first == 3) {
  drink = latte;
}

const second = +window.prompt("구매할 음료의 개수를 고르시오");
const price = drink * second;

const third = +window.prompt("잔액을 투입하십시오+");
const coin = third - price;

if (first == 1) {
  window.alert(`${ice1} ${second}개 잔돈 ${coin}원`);
} else if (first == 2) {
  window.alert(`${lemon1} ${second}개 잔돈 ${coin}원`);
} else if (first == 3) {
  window.alert(`${latte1} ${second}개 잔돈 ${coin}원`);
}
