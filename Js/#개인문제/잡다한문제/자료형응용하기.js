/**실습과제

숫자형을 담고 있는 변수들(`material1`, `material3`, `material5`)과 문자열을 담고 있는 변수들(`material2`, `material4`)이 있습니다.

변수들끼리 연산을 하여 `result1`에는 문자열 `'34'`를, `result2`에는 숫자형 `34`를 만들어 넣어주세요!

단, 절대 숫자값을 사용하지 마세요. `result1`과, `result2`는 반드시 `material1~5` 변수들의 연산식만 할당해야 합니다.

실행결과는 다음과 같아야 합니다. 
*/

// 주어진 숫자형 문자열 재료
let material1 = 3;
let material2 ='3';
let material3 = 10;
let material4 = '4';
let material5 = 4;

// 연산결과 변수
let result1;
let result2;

result1 = material2 + material4;
result2 = material1 * material3 + material5;

//테스트 코드
console.log("[result1]");
console.log(result1);
console.log(`result1의 datatype은 ${typeof result1}입니다.\n`);

console.log("[result2]");
console.log(result2);
console.log(`result2의 datatype은 ${typeof result2}입니다.\n`);
