/** 연습문제 3번 */

const covid19 = [
    {date: '0125', active: 426},
    {date: '0126', active: 343},
    {date: '0127', active: 547},
    {date: '0128', active: 490},
    {date: '0129', active: 460},
    {date: '0130', active: 443},
    {date: '0131', active: 338},
    {date: '0201', active: 299}
];
//  3-1
//  1월 25일부터 2월 1일까지의 누적 확진자 수와 일 평균 확진자 수를 구하시오.
let sum = 0;

for (const k of covid19){
    sum += k.active;
}

let avg = sum/covid19.length;
console.log("누적 확진자 수 : %d", sum);
console.log("평균 확진자 수 : %d", avg);

//  3-2
//  1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가?

let max = 0;
let maxDate = "";
for (const k of covid19){
    if( max < k.active){
        max = k.active;
        maxDate = k.date;
    }
}
console.log("확진자가 가장 많이 나타난 날: %s", maxDate);