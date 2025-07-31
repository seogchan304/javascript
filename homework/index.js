const boxes = document.querySelectorAll(".box");
const su = document.querySelector(".su");
const totalprice = document.querySelector(".totalprice");

let totalCount = 0;
let totalWon = 0;
const priceList = [15900, 14900];

boxes.forEach((box, index) => {
  const minus = box.querySelector(".minus");
  const plus = box.querySelector(".plus");
  const num = box.querySelector(".num");
  const price = box.querySelector(".price");
  const eachPrice = priceList[index];

  plus.addEventListener("click", () => {
    num.innerHTML = +num.innerHTML + 1;
    const nowNumber = Number(price.innerHTML.replace("원", "")) + eachPrice;
    price.innerHTML = nowNumber + "원";

    totalCount += 1;
    totalWon += eachPrice;
    su.innerHTML = totalCount + "개"
    totalprice.innerHTML = totalWon + "원"
  });

  minus.addEventListener("click", () => {
    const nowNumber = Number(num.innerHTML);
    if (nowNumber > 0) {
      num.innerHTML = +num.innerHTML - 1;

      const nowPrice = Number(price.innerHTML.replace("원", "")) 
      const newPrice = nowPrice - eachPrice;
      price.innerHTML = newPrice + "원";

      totalCount -= 1;
      totalWon -= eachPrice;
      su.innerHTML = (totalCount < 0 ? 0 : totalCount) + "개";
      totalprice.innerHTML = (totalWon < 0 ? 0 : totalWon) + "원";
    }
  });
});
