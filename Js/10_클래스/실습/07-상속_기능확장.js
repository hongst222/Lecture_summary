/** 기본 기능을 갖는 클래스 */
class SayHello {
    eng() {
        console.log("Hello Javascript");
    }
}

/** 기본 기능을 확장하는 클래스 */
//  부모의 기능을 상속받고, 추가로 자신이 구현하는 기능도 사용할 수 있다.
class SayHelloWolrd extends SayHello {
    kor() {
        console.log("안녕하세요 자바스크립트");
    }
}

const say = new SayHelloWolrd();
say.kor();
say.eng();