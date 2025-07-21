// 1. 어떠한 x를 넣으면 제곱을 돌려주는 함수 만든 후
// 함수를 활용해서 콜솔로 결과 나타내기

function double(twice) {
  return twice * twice;
}
const answer = double(2);
window.console.log(answer);

// 2. 어떠한 food를 넣으면 'food는 맛있다' 함수 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기

function cook(tamato) {
  return tamato + "은(는) 맛있다";
}
const food = cook("햄버거");
window.console.log(food);

// 3. 어떠한 x를 넣으면 홀수 또는 짝수를 돌려주는 함수를 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기

function oddeven(number) {
  if (number % 2 == 0) {
    return "짝수";
  } else {
    return "홀수";
  }
}
const final = oddeven(8);
window.console.log(final);

// 4. 어떠한 x를 넣으면 배열로 [x*1,x*2,x*3]을 돌려주는 함수를 만든후
// 함수를 활용해서 콘솔로 결과 나타내기
