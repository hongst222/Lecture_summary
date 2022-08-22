let arr1 = [];

function sortSolution(inputNumber){
    let sort = [];
    sort =inputNumber.sort((a,b) => a-b);  //a = next , b = previous a-b값이 음수가 되면 자리가 바뀜. 즉 이전 수가 다음 수보다 크면 자리가 바뀜
                                                                                                // --> 큰 수가 뒤로 가게되는 것.
    return sort;
    
}
function foundSameNumber (arr,inputValue1){
    return arr.find((e) => (e===inputValue1));
}
function lotto(){
    for(i = 0 ; i<6; i++){
        let number = Math.floor(Math.random()*45+1);
        if(!foundSameNumber(arr1,number)){
            arr1.push(number);
        } else {
            i--;
        }
    }
    sortSolution(arr1);
    return arr1;
}

console.log(lotto());


