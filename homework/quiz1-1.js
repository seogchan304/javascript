bus_list = [1250, 2000, 3000];
const subway = +window.prompt("지하철 노선의 종류를 입력하세요") - 1;
const age = +window.prompt("나이를 입력하세요");
const section = +window.prompt("탑승 구간의 수를 입력하세요");
const extra_section = section > 10 ? 100 * (section - 10) : 0;
if (age <= 7 || age >= 65) {
  window.alert("0원");
} else if (age >= 8 && age <= 18) {
  window.alert(`요금: ${(bus_list[subway] + extra_section) * 0.6}원`);
} else if (age >= 19 && age <= 64) {
  window.alert(`요금: ${bus_list[subway] + extra_section}원`);
}
