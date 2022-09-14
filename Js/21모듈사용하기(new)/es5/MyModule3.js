/** Class 모듈화 */
class MyClass {
    constructor(){
        console.log("----- MyClass의 객체가 생성되었습니다 -----");
        this.age = 20;
        this.name = "node";
    }

    say() {
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    }
}
