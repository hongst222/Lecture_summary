/**문제
 * 정수 N의 약수는 N을 나누었을때 나누어 떨어지는 수 입니다.
 * 만약 정수 i가 정수 N의 약수라면, N을 i로 나누었을 때 나머지가 0이 나와야 합니다.
 * while문을 활용해서 정수 180의 약수를 모두출력하고, 총 몇개의 약수가 있는지 출력하는
 * 프로그램을 작성하시오.
 */

/** 문제파악
 *  나누어 떨어진다 --> N % i =0;
 *  while문을 사용
 *  약수의 개수를 나타내는 cnt변수 선언 
 */

//변수 선언
let number = 180;
let i = 1;
let cnt = 0;

//while문
while (i <= number) {

    if (number%i == 0){
        console.log(i);
        cnt++;
    }
    i++;
}
console.log(`${number}의 약수는 ${cnt}개입니다.`);