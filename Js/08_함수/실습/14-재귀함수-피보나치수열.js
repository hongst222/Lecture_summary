/**
 * 피보나치 수열에서 10번째 항목이 무엇인지 출력하시오.
 * 
 * 0 1 1 2 3 5 8 13 21 34 55 ...
    f(0) = 0
    f(1) = 1
    f2() = f(1) + f(0) = 1
*/

function fibonacci(n) {
    
    if(n < 2) {
        return n;
    } else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
};

console.log(fibonacci(5));