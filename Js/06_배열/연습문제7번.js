/** 쇼핑몰 상품 목록에서 상품의 가격을 원소로 하는 배열 money를 정의하였을 때
    "낮은 가격순" 버튼이 눌러졌을 때 상품의 가격을 재정렬하기 위한코드에 대한 일부이다. 빈 칸을 채워 넣어 완성하시오.
*/

//  쇼핑몰 상품 목록의 가격들
let price = [209000, 109000, 119000, 109000, 94000];
console.log("상품가격 --> " + price);

//  낮은 가격순서로 뽑아내기

for (let i = 0; i< price.length-1; i++){
    for (let j=i+1; j<price.length; j++){
        if (price[i]>price[j]){
            let tmp = price[i];
            price[i] = price [j];
            price[j] = tmp;
        }
    }
}

console.log("낮은 가격순 --> " + price);

