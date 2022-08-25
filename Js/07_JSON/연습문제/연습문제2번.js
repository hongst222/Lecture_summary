/** 문제2번 */
//  다음의 JSON은 어느 학급의 중간고사 성적을 나타낸다.
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
};

//  문제 2-1
//  위 데이터에서 학생별 총점과 평균을 구하시오

//  문제 2-2
//  위 문제의 점수가 순서대로 국어, 영어, 수학, 과학일 경우 수학에 대한 모든 학생의 총점과 평균을 구하시오.
//let course = [ '국어', '영어', '수학', '과학'];

const keys = Object.getOwnPropertyNames(exam);
//console.log(keys);

let mSum = 0, mAvg =0;
for (const k of keys){
    let sum = 0, avg = 0;

    mSum += exam[k][2]; 
    for(let i = 0; i<exam.남철.length; i++){
        sum += exam[k][i];
    }
    avg = sum/exam.남철.length;
    console.log("%s의 총점: %d 평균: %d",k,sum,avg);

}

mAvg = mSum/keys.length;
console.log("모든 학생의 수학 총점은 %d , 평균은 %d", mSum, mAvg);


