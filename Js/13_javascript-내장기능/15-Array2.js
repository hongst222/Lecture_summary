/**
 *  배열을 탐색하는 방법
 */

/**
 * ### Array.forEach((element,index) ⇒ { 실행코드 }

    배열의 모든 원소를 탐색한다.

    - 콜백 함수에게 배열의 값(element)과 인덱스(index)를 전달한다.
    - 콜백 함수는 원소의 수 만큼 순차적으로 실행된다.
 */
const arr = [10,20,30,40];
arr.forEach((element, index) => {
    if(index==3) {
        console.log('반복중단');
        // - forEach의 콜백함수에서 반복을 중단하고자 return을 사용할 경우 현재 동작중인 콜백만 종료될 뿐 전체 반복에는 영향이 없다.
        // - break; 사용 불가  (break는 for,while문에서만 가능, 함수 안에서는 불가능)
        return;
    }
		console.log("%d번째 원소 --> %d", index, element);
});
/**
 *  배열에서 특정 조건을 충족하는 원소를 추출하기
 */

const arr33 = [5,12,8,131,44];
const results = arr33.filter(function (element, index, arr) {
    console.log("element = %d, index = %d, arr = %s", element, index, arr);
    if (element % 2 ==0){
        //  true가 리턴되는 경우 element 는 results 배열의 원소로 저장된다.
        //  true를 리턴하더라도 배열의 모든 원소를 탐색하기 전까지는 종료되지 않는다.
        return true;
    } else {
        //false가 리턴되는 경우 element는 버려진다.
        return false;
    }
});
console.log("filter 함수 결과");
console.log(results);

/**
 * ### Array.some((element, index) ⇒ { 실행코드 }

    탐색을 중단하는 기능을 제공한다.

    - 콜백함수가 true를 리턴하는 순간 순환을 중단한다.
 */
const arr3 = [10,20,30,40,50];
arr3.some((element,index) => {
	if(index==3) {
		console.log('--반복중단--');
		return true;
	}
	console.log("[%d]번째 원소 --> %d", index, element);
});

/**
 * 배열의 원소를 가공하여 새로운 배열 만들기
 */


/** 
 *  map함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서    다른 배열(A)에 저장.

    다른 배열(A)은 반드시  원본배열(Array)와 **같은 길이를 갖는 배열**이여야 한다.

    return하지 않은 index에 대한 원소는 undefined가 된다.
 */

const arr4 = [10, 20, 30, 40, 50];
const hello = arr4.map((element, index) => {
    return element * 10;
});
console.log(hello);

//화살표 함수(=>)는 처리로직이 한줄인 경우 “{ }” 와 “ ; “ , “return” 키워드가 생략 가능
const arr5 = [10,20,30,40,50];
const world = arr5.map((element, index) => element*10);
console.log(world);

/**
 *  배열 검색
 */

//  주어진 판별함수를 만족하는 첫번째 값을 반환한다. 못찾으면 undefined를 반환한다.
//  찾고자 하는 항목이 아닌 검색 규칙을 구현한 콜백함수를 전달해야 한다.
const arr6 = [5,12,8,131,44];
const found = arr6.find(function(element) {
    // 파라미터로 전달되는 element는 배열의 모든 원소가 순차적으로 전달된다.
    //console.log(element);

    //  element를 우리가 원하는 조건에 충족하는지 검사하여 true/false 리턴
    //  true를 리턴하는 순간 배열의 탐색을 중단. (break와 동일 기능)
    if (element%2==0){
        //  true가 리턴되는 경우 element는 found에 저장된다.
        return true;
    } else {
        //  false가 리턴되는 경우 element는 버려진다.
        return false;
    }

});
console.log(found);

/** 배열정렬 */
//sort
/**
 * 퀵정렬 알고리즘을 사용하여 배열 자체를 정렬한다.

    ⇒ 배열의 모든 원소를 문자열로 취급하기 때문에 글자 정렬기준이 적용된다.

    정렬조건을 콜백함수로 처리한다.
 */
//오름차순
const Array = [2,1,15];
Array.sort(function (a,b) {
	console.log("a=%s, b=%s", a,b);
	return a - b;
});
console.log(Array);
//내림차순
const Array2 = [2,1,15];
Array2.sort(function (a,b) {
	console.log("a=%s, b=%s", a,b);
	return b - a;
});
console.log(Array2);

/** 역순배치*/
let arr11 = [1,2,3,4,5];
arr11.reverse();
console.log(arr11);