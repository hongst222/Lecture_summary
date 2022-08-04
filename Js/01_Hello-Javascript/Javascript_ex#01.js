"use strict"; // 엄격모드 적용 --> ES6 호환기능만 사용하도록 명시

// 메시지 그룹핑
console.group("MyMessage1");
    console.log("안녕하세요. Js1");
    console.log("안녕하세요. Js2");
    console.log("안녕하세요. Js3");
console.groupEnd();

console.group("MyMessage2");
    console.log("안녕하세요. Js4");

    console.group("MyMessage2-1");
        console.log("안녕하세요. Js5");
        console.log("안녕하세요. Js6");
    console.groupEnd();

    console.group("MyMessage2-2");
        console.log("hello. Js7");
        console.log("hello. Js8");
    console.groupEnd();

    console.group("MyMessage2-3");
        console.log("hello. Js9");
        console.log("hello. Js10");
    console.groupEnd();

console.groupEnd();
