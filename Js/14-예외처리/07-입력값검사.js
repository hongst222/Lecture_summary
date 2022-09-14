import RegexHelper from './helper/RegexHelper.js';

//  회원가입시 입력받은 값을 가정한 변수
//  사용자가 입력한 모든 내용은 문자열 변수이다.

const username = '자바스크립트';
const age = '20'; 
const userid = 'js123';

//  입력값 검사를 수행하기 위한 객체
const regex = RegexHelper.getInstance();

//  입력값의 형식검사수행
try {
    regex.value(" ", '값을 입력하세요');
} catch (err) {
    console.group("%s 에러 발생", err.name);
    console.error("에러코드: %d", err.statusCode);
    console.error("에러내용: %s", err.message);
    console.groupEnd();
}

console.log("검사완료!");