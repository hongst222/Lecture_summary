function returnBreak(x, y){
    if (x < 10){
        return -1;
    }

    if (y < 10){
        return -2;
    }
    return x+y;
}

//  첫번째 if문에 의해 처리가 중단되고 -1이 반환된다.
console.log(returnBreak(1,200));
//  두번째 if문에 의해 처리가 중단되고 -2가 반환된다.
console.log(returnBreak(12,1));
//  x+y가 리턴된다.
console.log(returnBreak(10,10));