const starbucks = [
  {
    name: "아메리카노",
    price: 4500,
    shots: 2,
    ingredients: ["water", "caffeine"],
  },
  {
    name: "라체",
    price: 4500,
    shots: 2,
    ingredients: ["water", "milk", "caffeine"],
  },
  {
    name: "돌체 라떼",
    price: 4500,
    shots: 2,
    ingredients: ["water", "milk", "caffeine", "condensed milk"],
  },
  {
    name: "바닐라 크림",
    price: 4500,
    shots: 2,
    ingredients: ["water", "milk", "vanila"],
  },
  {
    name: "카페 모카",
    price: 4500,
    shots: 2,
    ingredients: ["milk", "chocolate", "water", "caffeine"],
  },
];

// //3. 저녁 타임 이벤트로 각 가격을 20% 할인해서 메뉴 전체 나타내기
// const test = (x) => {
//   x.price = x.price * 0.8;
//   return x;
// };

//4. 이름에 라떼가 있으면, 재고없음 이름 바꾸고 아니면 그대로 나타내기
// const fn2 = (x) => {
//   x.name = x.includes("라떼") ? "재고없음" : x.name);
//   return x;
// };
// window.console.log(starbucks).map(fn2);

//5. caffeine -> decaffeine
const fn4 = (y) => {
  return y == "caffeine" ? "decaffeine" : y;
};

const fn3 = (x) => {
  x.ingredients = x.ingredients.map(fn4);
  return x;
};
const answer = starbucks.map(fn4);
window.console.log(starbucks).map(fn3);
