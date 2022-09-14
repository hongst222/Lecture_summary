//  개발자가 발생시키는 에러에 대한 예외처리
let err = new Error("이상한일이 벌어짐");

try {
    //  throw 구문은 그 자체를 에러로 인식, try~catch 처리 가능
    throw err;
} catch  (err) {
    console.log("에러이름: %s",err.name);
    console.log("에러내용: %d",err.message);
}

//  에러 상황을 try~catch로 처리했으므로 프로그램이 중단되지 않고 무사히 종료된다.
console.log("프로그램 종료");