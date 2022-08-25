/** 연습문제 9번 */

/** 과목명  HTML    css     javascript
 *  둘리    78      89          96
 *  도우너  62      77          67
 *  또치    54      90          80
 *  희동    100     99          98
 */

//  학생별 총점과 평균점수를 구하기 위한 소스코드를 작성하시오.
//  단, 평균점수의 경우 toFixed()함수를 사용하여 소수점 둘째 자리 까지만 출력하시오.

/** 연습문제 10번 */
//  연습문제 9번에서 반 평균을 출력하시오. 반 평균은 학생의 평균 점수 총 합/학생수로 구합니다.
// toFixed() 함수로 가공된 값은 문자열 형태이기 때문에 숫자 연산이 불가능합니다.


/** 학생 이름 배열 */
let student = ["둘리", "도우너", "또치", "희동"];

/** 성적표 배열 */
let grade = [
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98]
];


/** 총점과 평균 구하기 */

// 반평균의 평균을 구하기 위한 반평균의 평균값, 반평균 총합값
let allAvg = 0, avgSum = 0;
for (let i =0; i<grade.length; i++){
    //  총점과 평균점수를 저장할 변수
    let sum = 0, avg = 0;
    for (let j=0; j<grade[i].length; j++){
        sum += grade[i][j];
    }
    avg = (sum / grade[i].length);

    //학생별 평균점수 합계 내기
    avgSum +=avg;
    avg = avg.toFixed(2);
    console.log(`${student[i]} 총점:${sum}점, 평균:${avg}점`);
}
//반평균 구하기
allAvg = avgSum/student.length;
console.log(`반평균= ${allAvg}점`);