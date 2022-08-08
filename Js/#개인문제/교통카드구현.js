/**실습과제

*   코드잇 마을에서는 대중교통을 이용할 때, 교통카드를 단말기에 태그하면 "삑!"하고 소리가 납니다.
*   그런데 항상 "삑!"소리만 나는 게 아니라 상황에 따라서 청소년의 경우에는 "삑삑!", 승차권이 제대로 찍히지 않을 땐
*    "삑삑삑!", 그리고 환승을 할 때는 "환승입니다." 라는 소리도 나는데요.
*
*   각 상황의 소리를 담은 변수 `adultTag`, `teenagerTag`, `errorTag`, `transferTag` 를 만들고,  이 변수들을 
*   파라미터(`tagCase`)로 전달하면 각 상황에 맞게 태그 소리를 콘솔에 출력하는 `tagNotification`함수를 만들어 보세요.
*
*   코드가 잘 작성되었다면 실행 시 다음과 같이 출력되어야 합니다.
*   -----------------------------------------------------------
*   삑!
*   삑삑!
*   환승입니다.
*   삑삑삑!
*   삑!
*   -----------------------------------------------------------
*/
let adultTag = "삑!";
let teenagerTag ="삑삑!";
let transferTag ="환승입니다.";
let errorTag = "삑삑삑!";

function tagNotification(tagCase){

    console.log(tagCase);           

}
// 테스트 코드
tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);