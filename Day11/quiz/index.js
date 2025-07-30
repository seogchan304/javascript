const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const plus = document.querySelector(".plus");

plus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML + 1;
});

minus.addEventListener("click", () => {
  const nowNumber = +num.innerHTML;
  if (nowNumber == 0) {
    num.innerHTML = 0;
  } else {
    num.innerHTML = +num.innerHTML - 1;
  }
});

const chong = document.querySelector(".chong");
const su = document.querySelector("su");
const gae = document.querySelector(".gae");
const price = document.querySelector("price");
const won = document.querySelector(".won");

plus.addEventListener("click", () => {
  price.innerHTML = +price.innerHTML + 15900;
});
