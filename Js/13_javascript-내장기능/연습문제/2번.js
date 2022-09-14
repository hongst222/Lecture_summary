/** 문제2
    임의의 주민번호를 다음과 같이 *를 포함하여 변수에 저장하시오.
    또한 현재 년도를 now_year라는 변수로 저장하시오.
 */

const ssn = '971004-1******';

function printPersonInfo(ssn){
    //  현재년도 구하기
    const a = new Date();
    const now_year = a.getFullYear();
    //  주민번호 뒷자리 구하기
    const behindNumber = ssn.substring(7,8);
    //  성별 구하기
    let gender = behindNumber%2 == 1 ? '남자' : '여자' ;
    //  생년월일 구하기
    let birthYear = parseInt(ssn.substring(0,2));
    birthYear += behindNumber > 2 ? 2000 : 1900; 
    let birthMonth = ssn.substring(2,4);
    let birthDate = ssn.substring(4,6);
    
    //  나이 구하기
    let age = now_year - birthYear + 1;

    //  출력
    console.log("나는 %d년 %s월 %s일에 태어난 %d세 %s입니다. ", birthYear,birthMonth,birthDate,age,gender);
}
printPersonInfo(ssn);

