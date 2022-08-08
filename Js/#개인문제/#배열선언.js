"use strict"
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

// 문제3.
// 입력받은 배열의 길이를 출력하시오.
let value3 = ["a", "b", "c", "d", "e", "f"];

function solution3(inputValue){
    return inputValue.length;
}
console.group("문제3번 실행결과");
    console.log(solution3(value3));
console.groupEnd();

// 문제4.
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

// 문제5.
// 입력 받은 배열의 마지막 값을 제거후 반환하시오.
let value5 = ["a", "b", "c", "d", 1, 2, 3];

function solution5(inputValue){
    v = inputValue[inputValue.length -1];
    inputValue.pop();

    return inputValue;
}
console.group("5번문제 실행결과");
    console.log(solution5(value5));
console.groupEnd();