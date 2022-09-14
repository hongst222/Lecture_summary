/** 정수 A와 정수B의 최대 공배수 구하기
 *  for문 사용
 */

// 최소공배수 --> lcm 으로 선언

let num1 = 34;
let num2 = 15;
let lcm = 2;
let stop = true;    // for문에만 이용

//  for문 사용시
for (let i = 2; stop === true ; i++){
    
    if (i % num1 == 0 && i % num2 == 0){
        lcm = i;
        stop = false;
    }
}

//  while문 사용시
/**while(true){
    if(lcm % num1 == 0 && lcm % num2 ==0){
        break;
    }
    lcm++
}
*/

console.log(`${num1}와 ${num2}의 최소공배수는 ${lcm}입니다.`);


