/** 연습문제1
 *  다음의 소스코드는 **bloolean 데이터**를 저장하고 있는 배열에 대한 어떤 처리를 보여준다.
 *  실행 결과에서 제시하는 것과 같이 배열에 저장되어 있는 값들을 반전(true는 false로 false는 true로) 변환하는 처리를 완성하시오.
 */

let check_list = [true, false, false, true, false];
console.log("before --> " + check_list);

// function reverse(inputArr){
//     let newArr = new Array(inputArr.length);
//     for (let i = 0; i< inputArr.length; i++){
//         newArr[i] = !check_list[i];
//     }
//     return newArr;
// }
// console.log("after --> " + reverse(check_list));

for (let i = 0; i < check_list.length; i++){
        check_list[i] = !check_list[i];
}

console.log("after --> " + check_list);
