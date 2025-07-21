// 마술상자(input b-> output)
function give100(x) {
  return x * 100;
}

function hello(name) {
  return name + "님 ㅎㅇ";
}

const test = give100(10);
window.console.log(test); // 1000

const test1 = hello("이석찬");
window.console.log(test1); // 이석찬님 ㅎㅇ
