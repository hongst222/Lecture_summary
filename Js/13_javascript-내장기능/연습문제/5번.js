/** 문제5번
 *  1~45사이의 범위의 1씩 증가 하는 원소가 저장되어 있는 배열 balls을 생성하고 
 *  6개의 빈 칸을 갖는 배열 lotto를 생성하시오.
 *  lotto 배열을 탐색하는 반복을 수행하면서 balls 배열에서 임의의 원소 하나를 추출하여 
 *  lotto 배열에 채워 넣으시오.
 *  추출된 숫자는 balls 배열에서는 삭제되어야 합니다.
 */
function random(n1,n2) {
    return parseInt(Math.random()*(n2-n1+1)) +n1;
}
lotto = new Array(6).fill("");

balls = new Array(45).fill(0);
balls.forEach((element,index) => balls[index] = index+1);

lotto.forEach((e,i) => {
    let a = balls.splice([random(0,balls.length-1)],1);
    lotto[i] = a;

});
lotto = lotto.sort((a,b) => a-b);
console.log("lotto");
console.log("----------------------------------------------");
console.log(lotto);
console.log("----------------------------------------------");
console.log("balls");
console.log("----------------------------------------------");
console.log(balls);
console.log("----------------------------------------------");

