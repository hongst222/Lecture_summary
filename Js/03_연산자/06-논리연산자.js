//** 1) and */
// --> 전체가 참인 경우만 결과가 참.
console.group("1) and");
    console.log(true && true);  ////true
    console.log(true && false); //false
    console.log(false && true); //false
    console.log(false && false); //false
console.groupEnd();
/** 2) and연산 여러 개 사용 */
console.group("2) and연산 여러 개 사용");
    console.log(true && true && true);      //true
    console.log(true && true && false);     //false
    console.log(false && false && true);    //false
    console.log(false && true && true);     //false
console.groupEnd();

/** 3) or */
// --> 하나라도 참이 포함되어 있으면 결과는 참
console.group("3) or");
    console.log(true || true); //true
    console.log(true || false); //true
    console.log(false || true); //true
    console.log(false || false); //false
console.groupEnd();

/** 4) or연산 여러 개 사용 */
console.group("4) or연산 여러 개 사용");
    console.log(true || true || true);      //true
    console.log(true || true || false);     //true
    console.log(false || false || true);    //true
    console.log(false || true || true);     //true
console.groupEnd();

/** 5) 복합사용 */
console.group("5) 복합사용");
// And가 OR보다 항상 우선한다.\
    console.log(true && true || true);      // t||t -> t
    console.log(true && true || false);     // t||f -> t
    console.log(false && false || true);    // f||t -> t
    console.log(false && true || true);     // f||t -> t

    console.log(true || true && true);      // t||t -> t
    console.log(true || ture && false);     // t||f -> t
    console.log(false || false && true);    // f||f -> f
    console.log(false || true && true);     // f||t -> t
console.groupEnd();

/** 6) not */
console.group("6) not");
    let success = true;
    let fail =! success;    // not t -> f
    console.log(fail);

    let k = 1;
    console.log(!k);        // not t -> f

    let l = 0;
    console.log(!l);        // not f -> t

    let str1 = "Hello";     // 내용이 있는 문장은 true
    console.log(!str1);     // not t -> f

    let str2 = "";          // 내용이 없는 문장은 false
    console.log(!str2);     // not f -> t
console.groupEnd();