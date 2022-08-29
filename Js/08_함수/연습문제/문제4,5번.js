// max는 최대 행 수, current는 현재 출력중인 행의 위치

function printStar(max, current = 1){
    if(current >max){
        return;
    } else {
        let str = "";
        for(let i = 0; i< current; i++){
            str += "*"
        }
        console.log(str);
        printStar(max, current+1);
    }

};

console.group("4번")
printStar(5);
console.groupEnd();


//  문제 5
function printRevStar(max, current = 1){
    if( current > max){
        return;
    } else {
        let str = "";
        for(let i = 0; i <max + 1 -current; i++){
            str += "*"
        }
        console.log(str);
        printRevStar(max, current+1);
    }
};
console.group("5번")
printRevStar(5);
console.groupEnd();
