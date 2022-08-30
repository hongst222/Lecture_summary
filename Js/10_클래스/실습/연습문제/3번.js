/** 문제 3번 */
//  다음을 만족하는 Student 클래스를 작성하시오.
//  1. string형의 학과와 정수형의 학번을 프로퍼티로 선언 후 생성자를 통해 주입
//  2. getter, setter를 정의
//  3. sayHello() 메서드를 통해 "나는 0000학과 00학번입니다."를 출력하는 기능 구현

class Student {
    #major;
    #studno;

    constructor(major, studno){
        this.#major = major;
        this.#studno = studno;
    }

    get major() {
        return this.#major;
    }
    set major(pr) {
        this.#major = pr;
    }

    get studno() {
        return this.#studno;
    }
    set studno(pr) {
        this.#studno = pr;
    }

    sayHello() {
        console.log("나는 %s학과 %s학번입니다.", this.major, this.studno);
    }
}
const a = new Student("컴퓨터공학","20165340");
a.sayHello();