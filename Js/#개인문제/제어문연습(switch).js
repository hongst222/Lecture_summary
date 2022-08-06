/**실습과제
*   윤식이는 공연 티켓 판매 프로그램을 개발하고 있습니다.
*   다른 부분은 어느 정도 정리가 되었는데, 좌석 등급에 따라서 가격을 알려주는 부분을 해결하지 못했는데요. 
*   힘들어하는 윤식이를 위해 switch문을 활용해서 각 등급이 선택되었을 때 등급에 따라 가격을 표시해주는 `checkPrice` 함수를 완성해 주세요.
*   코드가 잘 작성되었다면 다음과 같이 출력되어야 합니다.
*   --------------------------------------------------------
*   R석은 13만원 입니다.
*   VIP석은 15만원 입니다.
*   S석은 10만원 입니다.
*   A석은 8만원 입니다.
*   VIP, R, S, A 중에서 하나를 선택해 주세요.
*   -----------------------------------------
*/

// 티켓 등급에 따른 가격 표시 함수
function checkPrice(ticket) {
    switch (ticket) {
        case "VIP" :
            console.log(`${ticket}석은 15만원입니다.`);
            break;
        case "R" :
            console.log(`${ticket}석은 13만원입니다.`);
            break;
        case "S" :
            console.log(`${ticket}석은 10만원입니다.`);
            break;
        case "A" :
            console.log(`${ticket}석은 8만원입니다.`);
            break;
        default :
            console.log("VIP, R, S, A중에서 하나를 선택해주세요.");       

    }
}
// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');