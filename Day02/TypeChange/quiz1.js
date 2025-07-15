const line = window.prompt("한 변의 길이를 입력하시오.");
const square = Number(line) * 2;
window.console.log(`결과) 한 변의 길이 ${line}인 정사각형의 넓이:${square}`);

const underline = window.prompt("밑변의 길이를 입력하시오.");
const height = window.prompt("높이의 길이를 입력하시오.");
const triangle = (Number(underline) * Number(height)) / 2;
window.console.log(
  `결과) 밑변 ${underline}과 높이 ${height}인 삼각형의 넓이:${triangle}`
);

const won = window.prompt("원화를 입력하시오.");
const yen = Number(won) / 10;
window.console.log(`결과) ${won}원은 ${yen}엔 입니다!`);

const key = window.prompt("당신의 키는 얼마나 됩니까?");
const weight = window.prompt("당신의 몸무게는 얼마나 됩니까?");
const bmi = Number(weight) / (Number(key) * Number(key));
window.console.log(`결과) 키 ${key} 몸무게 ${weight} BMI ${bmi}`);

const minute = window.prompt("몇 분입니까?");
const time_result = Number(minute) * 60;
window.console.log(`결과) 분:${minute} 초:${time_result}`);
