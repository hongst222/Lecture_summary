/**문제
 * 이 롤러코스터는 140cm이상만 탑승할 수 있다. 안전상의 문제로 140cm 미만의 이용자는 이용이 불가능하다.
 * if문을 활용하여 키 140cm 기준으로 탑승 가능 유무를 알려주는 함수를 작성하시오.
 */

//[삼항연산자] 탑승 가능 유무를 알려주는 함수
/**function checkHeight(height){
    
    let k = height >= 140 ? `키가 ${height}cm이므로 탑승이 가능합니다.` : `키가 ${height}cm이므로 탑승이 불가능합니다.` ; //
    console.log(k);

}
*/
//[if문] 탑승 가능 유무를 알려주는 함수
function checkHeight(height){
    if (height >= 140){
        console.log(`키가 ${height}cm이므로 탑승이 가능합니다.`);
    } else {
        console.log(`키가 ${height}cm이므로 탑승이 불가능합니다.`);
    }
}


checkHeight(140);
checkHeight(176);
checkHeight(138);
