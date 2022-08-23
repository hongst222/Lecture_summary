let arr1 = [1,1,1,3,4,5,5,6,1,1];
let arr2 = [4,4,4,3,3,3];

// function solution(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] == arr[i+1]){
//             arr.splice(i,1);
//             console.log(arr[i]);
//             i--;
//         }
//     }
//     return arr;
// }
function solution(arr){
    return arr.filter((element,index) => element !== arr[index+1]);
}

console.log(solution(arr1));