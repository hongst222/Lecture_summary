/** 2차 배열의 탐색 */
const myArr = [
    [1, 2, 3],
    [4, 5, 6]
];

//  배열 자체의 길이는 행을 의미한다. 
console.log(myArr.length);

//  배열의 각 행단위로 열을 조회할 수 있다.
console.log(myArr[0].length);
console.log(myArr[1].length);


//  2차 배열을 반복문으로 탐색할 때는 2중 반복문이 사용된다.
//  바깥의 반복문을 행을 담당
for (let i=0; i<myArr.length; i++){
    console.group(i + "번째 행 -----");
    console.log(myArr[i]);

    for (let j=0; j<myArr[i].length; j++){
        console.log(myArr[i][j]);
    }
    console.groupEnd();
}

/** for-of 문을 활용한 탐색 */ 

console.group("2차배열의 탐색");

const myArr2 = [
    [1,2,3]
    [4,5,6]
];

for (const item of myArr){
    console.log(item);
    for(const sub of item){
        console.log(sub);
    }
}
console.groupEnd();