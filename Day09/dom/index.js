// document [hyml 타입]
// element [tag 타입]

//1. querySlector/querySlectAll: 찾아주세요
// const a = document.body.querySelector(".hi");
// const b = document.body.querySelector(".monday");
// const c = document.body.querySelector(".feeling");
// console.log(a);
// console.log(b);
// console.log(c);

// const d = document.body.querySelector(".text");
// d.innerHTML = "내일은 화요일";
// console.log(d);

const time = document.body.querySelector(".time");
time.innerHTML = new Date().toLocaleTimeString();

const month = document.body.querySelector(".month");
month.innerHTML = new Date().getMonth() + 1 + "월";

const date = document.body.querySelector(".date");
date.innerHTML = new Date().getDate() + "일";

const day = document.body.querySelector(".day");
const dayList = ["일", "월", "화", "수", "목", "금", "토"];
day.innerHTML = dayList[new Date().getDay()] + "요일";

const hour = document.body.querySelector(".hour");
hour.innerHTML = new Date().getHours() + "시";

const minute = document.body.querySelector(".minute");
minute.innerHTML = new Date().getMinutes() + "분";

const second = document.body.querySelector(".second");
second.innerHTML = new Date().getSeconds() + "초";
