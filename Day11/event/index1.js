const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const plus = document.querySelector(".plus");

// 플러스 클릭하면 num의 숫자가 하나 오름
plus.addEventListener("click", () => {
  const nowNumber = +num.innerHTML;
  if (nowNumber < 9) {
    num.style.color = "black";
  } else {
    num.style.color = "blue";
  }
  num.innerHTML = +num.innerHTML + 1;
});

minus.addEventListener("click", () => {
  const nowNumber = +num.innerHTML;
  if (nowNumber == 0) {
    num.innerHTML = 0;
  } else {
    num.innerHTML = nowNumber - 1;
  }
});

// 0미만으로 마이너스 안되도록 막아주고
// 10이상이면 num의 글씨 색상이 파란색으로 바뀌기
// 1~9이면 num의 글씨 색상이 검은색으로 바뀌기
