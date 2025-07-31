const sen = window.prompt("영어 문장을 입력하세요");
const words = sen.split(" ");
const width = (x) => {
  return x.length;
};
const cook = words.map(width);
window.console.log(cook);
