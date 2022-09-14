/**
 * isNaN(value)
 * 파라미터로 전달된 값이 NaN일 경우 true, 아니면 false
 * -> 숫자가 아니면 true, 숫자면 false
 * -> 숫자로 변환이 가능하면 flase
 * 
 * javascript의 다른 모든 값과 달리, NaN은 같음 연산(==, ===)을 사용해 판별할 수 없다.
 * 그래서 NaN 여부를 판별하는 함수가 필요하다.
 */

//  숫자로 변환 불가라고 판단하는 경우.
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN({a:10, b:20}));
console.log(isNaN([10,20,30]));
console.log(isNaN('blasa'));
console.log(isNaN('123ABC'));

//  숫자로 변환 가능하다고 판단하는 경우
console.log(isNaN(true));   // 1
console.log(isNaN(false));  // 0
console.log(isNaN(null));   // 0
console.log(isNaN(38));     // 38
console.log(isNaN('37'));   // 37
console.log(isNaN('37.37'));// 37.37
console.log(isNaN(''));     // 빈 문자열은 0으로 변환
console.log(isNaN(' '));    // 공백만으로 구성된 문자열은 0으로 변환
