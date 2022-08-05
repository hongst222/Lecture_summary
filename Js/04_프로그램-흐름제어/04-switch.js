/** swtich 기본 구문 */
console.group("1) Swtich 기본 구문 ");

const korean = "B";

switch (korean){
    case 'A' :
        console.log("A학점 입니다.");
        break; 
        case 'B' :
        console.log("B학점 입니다.");
        break;
    case 'C' :
        console.log("C학점 입니다.");
        break;
    default :
        console.log("C학점 미만입니다.");
        break;      
}
console.groupEnd();

/** 2) break가 없는 경우 */
console.group("2) break 가 없는 경우");

const eng = "B";

switch (eng){
    case 'A' :
        console.log("A학점 입니다.");
    case 'B' :
        console.log("B학점 입니다.");
    case 'C' :
        console.log("C학점 입니다.");
    default :
            console.log("C학점 미만입니다.");
}
console.groupEnd();

/** 의도적으로 break 조절 */

console.group("3) 의도적인 break 조절 ");

const math = "B";

switch (korean){
    case 'A' :
    case 'B' :
    case 'C' :
        console.log("Pass");
        break;
    default :
        console.log("NonPass");
        break;      
}
console.groupEnd();

/** 4) break 조건을 식으로 설정 */
console.group("4) break 조건을 식으로 설정 ");

const science = 72;

switch (science > 70){
    case true:
        console.log("Pass");
        break;
    default :
        console.log("NonPass");
        break;      
}
console.groupEnd();
