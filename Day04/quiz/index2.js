const subway = [
  { rail: "일반 노선", money: 1250 },
  { rail: "급행 노선", money: 2000 },
  { rail: "관광 노선", money: 3000 },
];

const time = +window.prompt("탑승 구간을 입력하세요!");
if (time > 10) {
  const extra = time - 10;
}
const extra_money = extra * 100;

const age = +window.prompt("나이를 입력하세요!")(`탑승요금은 원입니다`);
