/** 문제4번
 *  주어진 범위 안에서 랜덤한 숫자를 추출하는 함수는 아래와 같다.
 *  function random(n1,n2) {
 *  return parseInt(Math.random()*(n2-n1+1)) +n1;
 * }
 */
function random(n1,n2) {
    return parseInt(Math.random()*(n2-n1+1)) +n1;
}
function foundSameNumber(array,number){
    if(array.find(e => number === e)){
        return true;
    } else return false;
}

function makeLotto(array){
    for(let i = 0; i<6; i++){
    
        let number = random(1,45);
        if(!foundSameNumber(array,number) ){
            array.push(number);
        } else {
            i--;
        }
    }
    //  오름차순 정렬
    array.sort((a,b) => a-b); 
}
lotto = new Array(0);
makeLotto(lotto);
console.log(lotto);
