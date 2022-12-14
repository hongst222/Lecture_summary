// 문제
/**number라는 변수를 정의하고 1 혹은 2의 값을 임의로 할당하시오. 이 변수에는 1이나 2밖에 저장될 수 없습니다.
 * 구구단 프로그램을 만들고자 한다.
 * 전체를 출력하는 구구단이 아니라 nubmer가 1일 대는 홀수 단(3,5,7,9), number가 2일 때는 입력하면 짝수 단(2,4,6,8)을 출력하는 프로그램을 완성하시오. */

let number = 2;

switch (number){
    case 1:
        for(let i = 3; i<=9; i+=2){
            console.group(`${i}단`);
            for(let j = 1; j<=9; j++){
                console.log(`${i} * ${j} = ${i*j}`);
            }
            console.groupEnd();
        }        
        break;
    case 2:
        for(let i = 2; i<=9; i+=2){
            console.group(`${i}단`);
            for(let j = 1; j<=9; j++){
            console.log(`${i} * ${j} = ${i*j}`);
            }
            console.groupEnd();
        }
        break;
    default:
        console.log("잘못된 number 값 입력");
        break;
}

/**
 * 
 */

