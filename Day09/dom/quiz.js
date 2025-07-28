// 프롬포트로 유저에게 만들고 싶은 태그 묻고
// 태그의 배경색 묻고
// 태그의 컨텐츠(안에 내용) 묻고 난 후에
// HTML에 유저가 요구한 태그 만들기
// const user = prompt("만들고 싶은 태그를 입력하세요!");
// const BgColor = prompt("태그의 배경색을 입력하세요!");
// const inside = prompt("내용을 입력하세요");

// const tag = document.createElement(user);
// tag.innerHTML = inside;
// tag.style.backgroundColor = BgColor;
// document.body.appendChild(tag);

// 유저에게 좋아하는 음식들 입력받고
// 음식들을 각각 버튼 태그로 만들고
// 버튼 태그 색상은 순서대로 빨주노초파남보...
//ex) apple kiwi banana mango grape watermelon melon orange

const colorList = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
];
const foods = prompt("좋아하는 음식 n가지를 입력하세요!").split(" ");

foods.forEach((x, i) => {
  const btn = document.createElement("button");
  btn.innerHTML = x;
  btn.style.color = colorList[i % 7];
  document.body.appendChild(btn);
});
