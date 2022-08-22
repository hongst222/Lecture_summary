/** while문의 무한루프 형식 */
let y = 0;
while (true) {
    y++;

    if (y % 2 ==0){
        // 반복문의 흐름이 조건식으로 넘어가도록 제어
        continue;
    }

    if (y > 10){
        break;
    }

    console.log("Hello World ::: %d ", y);
}