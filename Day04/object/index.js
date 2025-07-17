// Object 타입
// key-value
// key는 중복 안됨 - 문자, 숫자
// value 중복 됨 - 아무타입가능
const americano = {
  name: "아메리카노",
  price: 2000,
  isIce: true,
  hasShot: true,
};
// dot 연산자
window.console.log(americano.name); // 아메리카노
window.console.log(americano.price); // 2000
window.console.log(americano.hasShot); // true

window.console.log(americano["name"]); // 아메리카노
window.console.log(americano["price"]); // 2000
window.console.log(americano["hasShot"]); // true

// 1. 보드게임 오브젝트 타입 변수를 만들기
// 이름은 할리갈리, 플레이어수 4명, 소요시간, 10분

// 2. 회원 오브젝트 타입 변수를 만들기
// 회원이름 여러분이름, 나이, 눈 시력 왼쪽, 오른쪽

const haligali = {
  name: "할리갈리",
  players: 4,
  playtime: "10분",
};

window.console.log(haligali.name);
window.console.log(haligali.players);
window.console.log(haligali.playtime);

const member = {
  name: "이석찬",
  age: 22,
  eyes: {
    left: 0.2,
    right: 0.5,
  },
};

window.console.log(member["eyes"]["right"]);

// 없는 key을 요청하면 undefined
window.console.log(member.living);
member.living = "김포";
window.console.log(member.living);
member.living = "파주"; // 파주로 바뀜
