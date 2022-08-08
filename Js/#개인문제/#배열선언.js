"use strict"


//******reduce, join, foreach, splice, slice, filter, map, sort 다시보기. 문제 한번 더 풀어보기.*****

// javascript array 문제
// 문제1. 입력받은 배열의 마지막에 "banana"를 추가 후 반환

let value = ["apply", "pie", "fig", "melon",  "pear", "fig", "melon", "pear", "peach"];

function solution(inputValue){

    inputValue.push("banana");
    return inputValue;
}
console.group("문제1번 실행결과");
    console.log(solution(value));
console.groupEnd();
console.log(`\n`);

// 문제2.
// 입력받은 배열의 처음에 "a"를 추가 후 반환하시오.
let value2 = [ "b", "c", "d", "e", "f"];
function solution2(inputValue){
    inputValue.unshift("a");
    return inputValue;
}

console.group("문제2번 실행결과");
    console.log(solution2(value2));
console.groupEnd();
console.log(`\n`);

// 문제3.
// 입력받은 배열의 길이를 출력하시오.
let value3 = ["a", "b", "c", "d", "e", "f"];

function solution3(inputValue){
    return inputValue.length;
}
console.group("문제3번 실행결과");
    console.log(solution3(value3));
console.groupEnd();
console.log(`\n`);

// 문제4.   (forEach, some, for)
// 입력 받은 배열의 순번과 값을 모두 출력하시오.
let value4 =[1, 2, 3, 4, 5, 6, 7];

/*function solution4(inputValue){
    let v4v =[];
    value4.forEach((e,i)=>{
        v4v.push("index: "+i+" element: "+e);
    })    
    return v4v;
    
}*/
function solution4(inputValue){
    let output = '';
    inputValue.forEach((e,i) => {
        output += `[${i}] : ${e}\n`;
    });
    return output;
}
console.log(solution4(value4));
console.log(`\n`);

// 문제5.   (pop)
// 입력 받은 배열의 마지막 값을 제거후 반환하시오.
let value5 = ["a", "b", "c", "d", 1, 2, 3];

function solution5(inputValue){
    inputValue.pop();

    return inputValue;
}
console.group("5번문제 실행결과");
    console.log(solution5(value5));
console.groupEnd();
console.log(`\n`);

// 문제6.   (shift)
// 입력 받은 배열의 첫번째 값을 제거(삭제)후 반환하시오.

let value6 = ["abc", "cde", "fgh", "ijk", "lnm", "opq"];

function solution6(inputValue){
    inputValue.shift();
    return inputValue;
}
console.group("6번문제 실행결과");
    console.log(solution6(value6));
console.groupEnd();
console.log(`\n`);

// 문제7.   (indexOf)
// 입력 받은 배열에서 d의 순번(index)를 출력하시오.
let value7 = ["a", "b", "c", "d", "e", "f", "g"];

function solution7(inputValue){
    return inputValue.indexOf("d");
}
console.group("7번문제 실행결과");
console.log(solution7(value7));
console.groupEnd();
console.log(`\n`);

// 문제8.   (indexOf, splice)
// 입력 받은 배열에서 "def"를 제거 후 반환하시오.
let value8 = ["abc", "def", "ghi", "qwe", "rty"];

function solution8(inputValue){

    let v = inputValue.indexOf("def");
    inputValue.splice(v,1);
    return inputValue;
}

console.group("8번문제 실행결과");
console.log(solution8(value8));
console.groupEnd();
console.log(`\n`);

// 문제9.   (slice)
// 입력 받은 배열의 복사본을 반환하시오.

let value9 =["a", "b", "c", "d", "e", "f"];

function solution9 (inputValue){

    return inputValue.slice();
}
console.group("9번문제 실행결과");
console.log(solution9(value9));
console.groupEnd();
console.log(`\n`);

//문제10. (filter)
//입력받은 배열에서 3보다 큰 값을 반환하시오
let value10 =[1, 2, 3, 4, 5, 6, 7];

function solution10(inputValue){

    return inputValue.filter(element => element >3);
}
console.group("10번문제 실행결과");
console.log(solution10(value10));
console.groupEnd();
console.log(`\n`);

// 문제11. (concat)
// 입력받은 두 배열을 합쳐서 반환하시오.

let concatValue1 =[2,3,4,5];
let concatValue2 =[10,20,30,40,50];

function concatSolution(inputValue1,inputValue2){

    return concatValue1.concat(concatValue2);
}
console.group("11번문제 실행결과");
console.log(concatSolution(concatValue1, concatValue2));
console.groupEnd();
console.log(`\n`);

// 문제12. (join)
// 입력 받은 배열 요소에 연결문자 ("-")추가 후 출력하시오.

let joinValue = ["aaa", "bbb", "AAA", "BBB", "ccc", "CCC"];

function joinSolution(inputValue){

    return inputValue.join("-");
}
console.group("12번문제 실행결과")
console.log(joinSolution(joinValue));
console.groupEnd();
console.log("\n");

// 문제13. (map)
// 입력 받은 배열 값을 2배 증가시켜서 반환하시오.
let mapValue = [10,20,30,40,50,60];

function mapSolution(inputValue){

    return inputValue.map(element => element * 2);
}
console.group("13번문제 실행결과")
console.log(mapSolution(mapValue));
console.groupEnd();
console.log("\n");


// 문제14. (reduce)
// 2개의 값을 전달 받아(2개의 인자) 그 수의 합을 반환하시오.
// 1번째 값은 배열
// 2번째 값은 숫자

let arr = [1,2,3,4,5,6,7,8,9,10];
let num = 10;

function plusSolution(inputArr, inputNumber){

    return inputArr.reduce((acc, cur)=> acc + cur, inputNumber);
}
console.group("14번문제 실행결과")
console.log(plusSolution(arr, num));
console.groupEnd();
console.log("\n");

// 문제15. (reverse)
// 입력받은 배열을 역순으로 정렬 후 반환하시오.

let reverseNumber = [5,4,3,2,1];

function reverseSolution(inputNumber){

    return inputNumber.reverse();
}
console.group("15번문제 실행결과")
console.log(reverseSolution(reverseNumber));
console.groupEnd();
console.log("\n");

// 문제16. (sort)
// 입력받은 배열을 오름차순으로 정렬하시오.

let sortNumber = [1,4,3,7,2,9,11,23,55,10];

function sortSolution(inputNumber){
    let sort = [];
    sort = inputNumber.sort((a,b) => a-b); //a = next , b = previous a-b값이 음수가 되면 자리가 바뀜. 즉 이전 수가 다음 수보다 크면 자리가 바뀜
                                                                                                // --> 큰 수가 뒤로 가게되는 것.
    return sort;
    
}
console.group("16번문제 실행결과")
console.log(sortSolution(sortNumber));
console.groupEnd();
console.log("\n");

// 문제17. (sort)
// 입력받은 배열을 내림차순으로 정렬하시오.

let sortNumber2 = [1,4,3,7,2,9,11,23,55,10];

function sortSolution2(inputNumber){
    let sort = [];
    sort = inputNumber.sort((a,b) => b-a); //a = next , b = previous b-a값이 음수가 되면 자리가 바뀜. 즉 이전 수가 다음 수보다 작으면 자리가 바뀜
                                                                                                // --> 작은 수가 뒤로 가게되는 것.
    return sort;
    
}
console.group("17번문제 실행결과")
console.log(sortSolution2(sortNumber2));
console.groupEnd();
console.log("\n");