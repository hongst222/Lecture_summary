/** 문제1
    자신의 이메일 주소를 email이라는 변수에 저장하고 @를 기준으로 아이디와 도메인
    부분을 분리하여 출력하시오.
 */

const email = "tmdxor97@naver.com";

function printSeperateEmail(str)
{
    const a = str.split('@');
    console.log("ID : %s", a[0]);
    console.log("Domain: %s",a[1]);
}

printSeperateEmail(email);
