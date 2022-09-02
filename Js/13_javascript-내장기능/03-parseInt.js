/**
 * **
 * parseInt(value, int)**

    - value를 int진법 수를 기준으로 10진수 값으로 변환한다.
        - 변환이 불가하면 NaN을 반환
        - 숫자 + 글자 형태의 문자열은 숫자 부분만 취함
        - **숫자** + 글자 + 숫자 인 경우 “글자+숫자”로 문자열이 되므로 맨앞에 있는 **숫자**만 변환
        - 글자 + 숫자 형태의 문자열은 변환 불가 - NaN
        - 소수점을 포함할 경우 정수부분만 취한다.
 */

//  10진법: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 -> ex) 12
//  16진법: 0 1 2 3 4 5 6 7 8 9  A  B  C  D  E F  10 11 12 13 14 15 -> ex) 0x12
//  8진법:  0 1 2 3 4 5 6 7 10 11 12 13 14 15 16 17 20 21 22 23 24 25

// 15로 변환

console.log(parseInt(' 0xF', 16));
console.log(parseInt(' F', 16));
console.log(parseInt(' 17', 8));
console.log(parseInt( '015', 10));
console.log(parseInt( 15.99, 10));
console.log(parseInt('15,123', 10));
console.log(parseInt('FXX123', 16));
console.log(parseInt('1111', 2));
console.log(parseInt('15*3', 10));
console.log(parseInt('15e2', 10));
console.log(parseInt('15px', 10));

// -15로 변환
console.log(parseInt(' -F', 16));
console.log(parseInt(' -0F', 16));
console.log(parseInt(' -0XF', 16));
console.log(parseInt(-15.1, 10));
console.log(parseInt(' -17', 8));
console.log(parseInt(' -15', 10));
console.log(parseInt(' -1111', 2));

//  NaN로 변환
console.log(parseInt("hello",8)); // 전부 숫자가 아님.