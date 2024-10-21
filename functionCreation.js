/**
 * 1. 함수 선언문
 * 2. 함수 표현식
 * 3. function 생성자 함수
 * 4. 화살표 함수 표현식
 */

// 1
// function move() {
//   console.log('움직입니다.');
// }

// 2
// const move = function () {
//   console.log('움직입니다.');
// }

// 3
// const move = new Function("console.log('움직입니다')");

// 4
const move = () => {
  console.log('움직입니다');
}

 move();