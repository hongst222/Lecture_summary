const num = 123.45
const str = "hello";
const bool = true;
const obj = new Date();
const arr = [1,2,3];
const json = {"a": 123, "b": 234}

/** 1) (중요) 숫자 표현을 위한 문자: %d */
console.group("숫자값 출력하기")
    console.log("숫자값 출력하기 =%d", num);
    console.log("숫자값 출력하기 =%d", str);
    console.log("숫자값 출력하기 =%d", bool);
    console.log("숫자값 출력하기 =%d", obj);
    console.log("숫자값 출력하기 =%d", arr);
    console.log("숫자값 출력하기 =%d", json);
console.groupEnd();

/** 2) (중요) 문자열 표현을 위한 문자 : %s  */
console.group("문자열 출력하기");
    console.log("문자열 출력하기 =%s", num);
    console.log("문자열 출력하기 =%s", str);
    console.log("문자열 출력하기 =%s", bool);
    console.log("문자열 출력하기 =%s", obj);
    console.log("문자열 출력하기 =%s", arr);
    console.log("문자열 출력하기 =%s", json);
console.groupEnd();

/** 3) 객체 표현을 위한 문자 : %o */

console.group("객체 출력하기");
    console.log("객체 출력하기 =%o", num);
    console.log("객체 출력하기 =%o", str);
    console.log("객체 출력하기 =%o", bool);
    console.log("객체 출력하기 =%o", obj);
    console.log("객체 출력하기 =%o", arr);
    console.log("객체 출력하기 =%o", json);
console.groupEnd();

/** 4) JSON 표현을 위한 문자 :%j */
console.group("json 출력하기");
    console.log("json 출력하기 =%j", num);
    console.log("json 출력하기 =%j", str);
    console.log("json 출력하기 =%j", bool);
    console.log("json 출력하기 =%j", obj);
    console.log("json 출력하기 =%j", arr);
    console.log("json 출력하기 =%j", json);
console.groupEnd();

const student = "자바스크립트학생";
const age = 20;
console.group("복합사용");
    console.log("%s님의 나이는 %d세 입니다." , student, age);
console.groupEnd();