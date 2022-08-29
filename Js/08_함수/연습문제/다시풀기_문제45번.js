function printStar(max,current=1){
    if(current > max ){
        return;
    } else {
        let str = "";
        for (let i = 0; i< current ; i++) {
            str += "*";
        }
        console.log(str);
        printStar(max,current+1);
    }
    

};

printStar(5);

function printRevStar(max, current = 1) {
    if(current > max){
        return;
    } else {
        let str = "";
        for(let i = 0; i< max - current + 1; i++){
            str +="*";
        }
        console.log(str);
        printRevStar(max,current+1);
    }
};
console.log("");
printRevStar(5);