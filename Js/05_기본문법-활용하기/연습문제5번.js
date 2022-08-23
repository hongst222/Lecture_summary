//  for문을 중첩하여 실행하여 아래와 같은 출력 결과를 만드시오.

for(let i = 0; i <= 3; i++){
    let str = "";
    for(let j = 0; j <= 3; j++){
        str += (i+j);
        if(j<3){
            str +=" ";
        }
    }
    console.log(str);
}