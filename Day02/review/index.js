const day = window.prompt("오늘은 무슨요일인가요?");
const time = window.prompt("지금은 몇 시 인가요?");
window.alert(`오늘은 ${day}요일이고 현재 ${time} 시간 입니다!`);

const name = window.prompt("이름이 무엇입니까?");
const first = window.prompt("첫번째 좋아하는 음식은?");
const second = window.prompt("두번째 좋아하는 음식은?");
const third = window.prompt("세번째 좋아하는 음식은?");
window.alert(
  `${name}님의 최애 음식 순서 1. ${first} 2. ${second} 3. ${third}😊`
);

window.console.log(
  `${name}님의 최애 음식 순서 1. ${first} 2. ${second} 3. ${third}😊`
);
