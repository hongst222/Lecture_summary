/**구구단 7단 출력 */
// y범위 1~9 (1<=y<10)
// while문이 도는동안 y*7을 통해 z값 생성

let y = 1;


while(y<10){
  const z = y * 7;
  console.log(`7 x ${y} = ${z}`);
  y++;
}

