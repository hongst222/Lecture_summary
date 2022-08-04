let numOfApples = 123;  //사과개수
let basket = 10;        //바구니당 사과를 담는 개수 10개

let boolean = numOfApples%basket !=0;   // 나머지가 있을경우 바구니가 하나 더 필요함
let remove = numOfApples%basket/10;     // 소수점 단위를 제거하기 위함.
let cnt = numOfApples / basket + boolean - remove;  // 바구니 개수

console.log("필요한 바구니 수는 %d입니다", cnt);
