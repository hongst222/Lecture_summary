/** 문제1 */
//  국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.
//  이 때, Student 클래스는 합계를 리턴하는 메서드인 sum()과 평균을 리턴하는 avg()를 제공한다.
//  작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균 점수를 출력하시오.

//  클래스는 JSON형식으로 작성되어야 한다.

const classroom = {
    "철수": [92, 81, 77],
    "영희": [72, 95, 98],
    "민혁": [80, 86, 84]
};

class Student {
    #studentName;
    #kor;
    #eng;
    #math;
    constructor(k){
        this.#studentName = null;
        this.#kor = k[0];
        this.#eng = k[1];
        this.#math = k[2];
    }
    get studentName() {
        return this.#studentName;
    }
    set studentName(pr) {
        this.#studentName = pr;
    }

    get kor() {
        return this.#kor;
    }
    set kor(pr) {
        this.#kor = pr;
    }
    
    get eng() {
        return this.#eng;
    }
    set eng(pr) {
        this.#eng = pr;
    }
    
    get math() {
        return this.#math;
    }
    set math(pr) {
        this.#math = pr;
    }

    sum() {
        return this.kor + this.eng + this.math;
    }
    avg() {
        return this.sum()/3;
    }
    print() {
        console.log("%s의 총점은 %d이고 평균은 %d점 입니다.",this.studentName,this.sum(),this.avg());
    }
}

const cs = Object.getOwnPropertyNames(classroom);
const d = new Array(cs.length);
for(let i = 0; i<cs.length; i++){
    d[i] = new Student(classroom[cs[i]]);
    d[i].studentName = cs[i];
    d[i].print();
}