const bus = [
  { name: "시내버스", price: 1200 },
  { name: "광역버스", price: 2000 },
  { name: "마을버스", price: 1000 },
];
const bus_list = ["시내버스", "광역버스", "마을버스"];
const choose = window.prompt("버스 노선의 종류를 고르시오(1 ~ 3)") - 1;
const age = +window.prompt("나이를 입력하시오.");

if (age < 8) {
  {
    window.console.log("무료입니다!");
  }
} else if (7 < age < 20) {
  window.console.log(`금액은 ${bus[bus_list].price * 0.3}원 입니다!`);
}
