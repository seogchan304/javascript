//1. [3,6,9,12,15] 배열을 각각 요소를 두배하고 더하기 10해서
//콘솔로 나타내기

const double = (x) => {
  return x * 2 + 10;
};
const list = [3, 6, 9, 12, 15].map(double);
console.log(list);

//2. [1,2,3,4,5,6,7,8,9,10] 배열을 각각 요소에서
//홀수면 두배, 짝수면 세배 해서 결과를 콘솔로 나타내기

const odd_even = (x) => {
  if (x % 2 == 0) {
    return x * 3;
  } else {
    return x * 2;
  }
};

const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(odd_even);
console.log(num_list);

//3. [1,2,3,4,5,6,7,8,9,10] 배열을 각각 요소에서
//5보다 작으면 1로 크면 2로해서 결과를 콘솔로 나타내기

const oneOrfive = (x) => {
  if (x > 5) {
    return 2;
  } else {
    return 1;
  }
};

const number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(oneOrfive);
console.log(number_list);

//4. [1,2,3,4,5,6,7,8,9,10] 배열을 각각 요소에서
//3의 배수면 "💚"로 아니면 "😋"로해서 결과를 콘솔로 나타내기

const three_check = (x) => {
  if (x % 3 == 0) {
    return `💚`;
  } else {
    return "😋";
  }
};
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(three_check);
console.log(number);

//5. ["apple", "mango", "juice", "kiwi", "straberry"]
// 요소를 문자의 길이로 바꿔서 콘솔로 나타내기
const fn5 = (x) => {
  return x.length;
};
const quiz5 = ["apple", "mango", "juice", "kiwi", "straberry"].map(fn5);
