/** 문제1 */

//  max 는 출력해야 할 최대 라인 수
function printStar(max) {
    
    for (let i = 0; i < max; i++){
        let str = "";
        for(let j = 0; j<=i; j++){
            str +="*"
        }
        console.log(str);
    }
    
};
console.group("1번 문제");
printStar(5);
console.groupEnd();

/** 문제2 */
//  별을 거꾸로 찍는 함수 생성 printRevStar(max);

function printRevStar(max) {
    for(let i = 0; i<max; i++){
        let str = "";
        for(let j=max-i; j>0; j--){
            str += "*";
        }
        console.log(str);
    }
}
console.group("2번 문제");
printRevStar(5);
console.groupEnd();