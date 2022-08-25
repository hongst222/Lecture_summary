/**
    학생별 총점과 평균 구하기
    | 이름 | 국어 | 영어 | 수학 |
    | 철수 |  92  |  81  |  76  |
    | 영희 |  72  |  95  |  84  |
    | 민혁 |  80  |  86  |  98  |
 */

//  학생 성적표 배열

const grade = [
    ["철수", 92, 81, 76],
    ["영희", 72, 95, 84],
    ["민혁", 80, 86, 98]
];

let sum = 0;

//  2차 배열 탐색

for (let i=0; i<grade.length; i++){

    // 학생 개인 총점
    let personal_sum = 0;
    for (let j=1; j<grade[i].length; j++){
        sum += grade[i][j];
        personal_sum += grade[i][j];
    }

    const personal_avg = personal_sum/(grade[i].length-1);
    console.log(`${grade[i][0]}의 총점은 ${personal_sum}이고, 평균은 ${personal_avg.toFixed(1)}입니다.`);
}
console.log(`학생들의 총점은${sum}이고, 학생총점 평균은 ${Math.floor(sum/grade.length)}입니다.`);