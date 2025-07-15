const first = window.prompt("첫 번째 숫자를 입력하시오.");
const second = window.prompt("두 번째 숫자를 입력하시오.");
// const result = Number(first) + Number(second) // 초간단
const first_number = Number(`${first}`);
const second_number = Number(`${second}`);
const result = first_number + second_number;
window.alert(`${first_number} + ${second_number} = ${result}`);

const age = window.prompt("나이를 입력하시오");
const year = 2026 - Number(`${age}`);
window.alert(`귀하의 태어난 년도는 ${year}년도 입니다!`);
