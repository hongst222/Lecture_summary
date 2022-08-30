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


//  생성자 
//  여기서 k는 배열
function Student(k) {
    this._studentName = null;
    this._korean = k[0];
    this._english = k[1];
    this._math = k[2];
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
        console.log("%s의 총점은 %d이고 평균은 %d점 입니다.",this.studentName,this.sum(),this.avg());
    }
};
//  JSON 데이터의 key값들에 대한 배열 생성
const cs = Object.getOwnPropertyNames(classroom);
//  배열을 생성한 후 배열에 객체 넣어주기
const d = new Array(cs.length);
for (let i = 0 ; i < cs.length; i++){
    d[i]= new Student(classroom[cs[i]]);
    d[i].studentName = cs[i];
    d[i].print();
}
