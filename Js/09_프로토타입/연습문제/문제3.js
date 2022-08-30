/** 문제 3번 */
//  다음을 만족하는 Student 클래스를 작성하시오.
//  1. string형의 학과와 정수형의 학번을 프로퍼티로 선언 후 생성자를 통해 주입
//  2. getter, setter를 정의
//  3. sayHello() 메서드를 통해 "나는 0000학과 00학번입니다."를 출력하는 기능 구현

function Student(course, number) {
    this._course = course;
    this._number = number;
}
Student.prototype = {
    get course() {
        return this._course;
    },
    set course(p) {
        this._course = p;
    },
    get number() {
        return this._number;
    },
    set number(p) {
        this._number = p;

    },
    sayHello : function() {
        console.log("나는 %s학과 %d학번 입니다.",this._course, this._number);
    }
};

const stud = new Student("컴퓨터", 202004123);
stud.sayHello();