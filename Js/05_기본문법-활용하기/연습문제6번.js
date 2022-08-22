//아래와 같은 출력결과가 나타나도록 중첩반복문을 for문 형식으로 구현하시오.
let str;
for (let i = 1; i <=7; i++){
    str ="";
    for(let j =1; j<=i; j++){
        str += j;
    }
    console.log(str);
}