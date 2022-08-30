// 문제 1.
// 학생의 정보와 학생의 총점과 평균을 구하는 코드를 작성해보자.

// 학생정보
// "현우" 일본어학과 학번 20204000 국어 90점 영어 95점 수학 95점
// "승택" 중국어학과 학번 20203000 국어 60점 영어 67점 수학 88점
// "준희" 한국어학과 학번 20202000 국어 92점 영어 88점 수학77점
// "정민" 프랑스어학과 학번20201000 국어 100점 영여 88점 수학 55점


// 출력결과
// 이름: 현우, 학과 : 일본어학과, 학번: 20200004, 총점: ㅁㅁㅁ점, 평균: ㅁㅁ점.
// ....

const exam = [
    {name: "현우", major: "일본어학과", studno: "20204000", kor: 90, eng: 95, math: 95},
    {name: "승택", major: "중국어학과", studno: "20203000", kor: 60, eng: 67, math: 88},
    {name: "준희", major: "한국어학과", studno: "20202000", kor: 92, eng: 88, math: 77},
    {name: "정민", major: "프랑스어학과", studno: "20201000", kor: 100, eng: 88, math: 55}
];

function Student(k) {
    this._name = k.name;
    this._major = k.major;
    this._studno = k.studno;
    this._kor = k.kor;
    this._eng = k.eng;
    this._math = k.math;
}

Student.prototype = {
    get name() {
        return this._name;
    },
    set name(pr) {
        this._name = pr;
    },

    sum : function() {
        return this._kor + this._eng + this._math;
    },
    avg : function() {
        return (this.sum()/3).toFixed(2);
    },
    print : function() {
        console.log("%s의 학과는 %s, 학번은 %s, 총점은 %d 평균은 %d입니다.",this.name, this._major, this._studno, this.sum(), this.avg());
    }

}
const a = new Array(exam.length);
for (let i = 0; i<exam.length; i++){
    a[i] = new Student(exam[i]);
    a[i].print();
}