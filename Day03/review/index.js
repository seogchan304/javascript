// const number = +window.prompt("정수를 입력하세요.");
// const result = number > 0 ? "양의 정수" : "0 또는 음의 정수";
// window.console.log(`${result}`);

// const height = +window.prompt("키를 입력해주세요.");
// const result1 = height >= 140 ? "탈 수 있음" : "탈 수 없음";
// window.console.log(`${result1}`);

const number1 = +window.prompt("나이를 입력하세요.");
const judge = number1 >= 20 ? "성인입니다." : "미성년자입니다.";
window.alert(`${judge}`);

const name = window.prompt("");
real_name = name;
const hello =
  name == "" ? "이름을 입력해주세요." : `안녕하세요, ${real_name}님!`;
window.alert(`${hello}`);

const number2 = +window.prompt("정수를 입력하세요.");
const judge1 = number2 % 2 > 0 ? "홀수입니다." : "짝수입니다.";
window.alert(`${judge1}`);
