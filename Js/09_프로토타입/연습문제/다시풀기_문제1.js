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

const classroom2 = [
    {name: "철수", kor: 92, eng: 81, math: 77 },
    {name: "영희", kor: 72, eng: 95, math: 98 },
    {name: "민혁", kor: 80, eng: 86, math: 84 }
];
function Student(k) {
    this._studentName = k.name;
    this._korean = k.kor;
    this._english = k.eng;
    this._math = k.math;
}
Student.prototype = {
    //  학생이름을 받기위한 getter, setter    
    get studentName() {
        return this._studentName;
    },
    set studentName(pr) {
        this._studentName = pr;
    },
    
    sum : function() {
        return this._korean + this._english + this._math;
    },

    avg : function() {
        return this.sum()/3;
    },

    print : function() {
        console.log(`${this.studentName}의 총점은 ${this.sum()}이고 평균은 ${this.avg()}입니다.`);
    }
};

const a = new Array(classroom2.length);
for(let i = 0 ; i < classroom2.length; i++) {
    a[i] = new Student(classroom2[i]);
    a[i].print();
}
