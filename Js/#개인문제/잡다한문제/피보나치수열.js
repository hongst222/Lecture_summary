// 피보나치 수열 출력하기

//피보나치 수열 함수 생성
// 1번항 = 1 , 2번항 = 1 3번항 = 1번 + 2번 = 2, 4번항 = 2번 + 3번 = 3, 5번 = 3번 + 4번 = 5

// 재귀함수 이용 ( 느려서 주석처리)
/**function fibonacc(integer) {

    let result;

    if (integer == 0){
        return 0;
    } else if (integer <= 1){
        return 1;
    } else {
        return fibonacc(integer-1) + fibonacc(integer-2);
    }
    
}*/
let inputNumber;

function fibonacc (integer) {
    
    let fNum1 = 0;
    let fNum2 = 1;
    let fNum3;
    if(integer == 0){
        fNum3 = 0;
    } else if (integer <=1){
        fNum3 = 1;
    }else {
        for(let i = 2; i <= integer; i++){              

            fNum3 = fNum1 + fNum2;
            fNum1 = fNum2;         
            fNum2 = fNum3;
        }
    }
    return fNum3;


}
// 테스트용 코드
inputNumber = 50;
for(let i =0; i <=inputNumber; i++ ){
    console.log(`${i}번째 피보나치 수열 = ${fibonacc(i)}`);
}