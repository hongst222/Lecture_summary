/** 문제3번
 *  아래의 문장에서 "수업시간"이라는 단어가 총 몇번 등장하는지 카운트하는
 *  프로그램을 구현하시오.
 *  
 *  str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."
 */

let str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."

function printFindStr(str1,str2){

    const arr = new Array(2).fill(0);

    for(let i = 0; true; i++){
        arr[i] = str.indexOf(str2,arr[i-1]+1);
        if(arr[i]===-1) break;
    }
    
    console.log("문장에서 '%s'은(는) %d개 입니다.",str2,arr.length-1);
}

printFindStr(str,"수업시간");
