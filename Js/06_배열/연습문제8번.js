//  배열의 원소를 반대로 배치하는 소스코드를 완성하시오.

let arr = [5, 3, 2, 8, 9];
console.log("before -->" + arr);

for (let i =0; i< parseInt(arr.length/2); i++){
    let tmp = arr[i];
    arr[i] =arr[arr.length-1-i]
    arr[arr.length-1-i]= tmp;
}
console.log("after --> " + arr);