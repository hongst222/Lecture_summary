let blood = ["A", "A", "A", "O", "B", "B", "O", "AB", "AB", "O"];

const result = { A: 0, B: 0, O: 0, AB: 0 };

console.group("1번");
for (const k of blood) {
  result[k]++;
}
console.log(result);
console.groupEnd();
//-----------------------------------------------------------------
console.group("2번");

const exam = {
  A: [89, 82, 79, 91],
  B: [91, 95, 94, 89],
  C: [65, 57, 71, 64],
  D: [82, 76, 81, 83],
};

let course = {
  Kor: { sum: 0, avg: 0 },
  Eng: { sum: 0, avg: 0 },
  Math: { sum: 0, avg: 0 },
  Sci: { sum: 0, avg: 0 },
};
//2-1
for (const ex in exam){
  let sum =0;
  for (const k of exam[ex]) {
    sum += k;
  }
  let avg = sum/exam[ex].length;
  console.log("%s의 sum: %d , avg: %d", ex, sum, avg);
}
let a = Object.getOwnPropertyNames(course);

for (const ex in exam){
  let count = 0;
  for (const k of exam[ex]){
    course[a[count]].sum += k;
    course[a[count]].avg += k/a.length;
    count++;
  }
  
}
console.log(course);
console.groupEnd();

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
//  3-2
//  1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가?

  let sum1 = 0 , max1 = "";
  for (const k of covid19){
    sum1 += k.active;
    if ( max1 < k.active) max1 = k.date;
  }
  avg = sum1/covid19.length;
  console.log("누적 확진자 수 : %d 일 평균 확진자 수 : %d 확진자가 가장 많은 날짜 %s", sum1, avg, max1);
  
  
