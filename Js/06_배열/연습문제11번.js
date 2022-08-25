/** 연습문제 11번 */
//  어느 게임 유저의 인벤토리.
//  첫 줄에 있는 아이템을 판매한다고 할 때, 이 유저가 벌어들이는 골드(G)의 총액은 얼마인가?
//  (판매를 위해 선택한 아이템의 상단에는 1개당 가격이 표시되고, 아이템을 판매할 때는 원래 가격의 90%만 받을 수 있다고 한다.)
//  가격과 아이템 수량의 정보를 2차 배열로 구성하는 소스코드를 완성하세요.
//  "단가-수량"을 한세트로 하는 정보들을 배열로 구성하면 2차 배열의 형태가 됩니다.

//  아이템 판매시 얻게될 골드량 선언
let gold = 0;

let inventory = [];
inventory = [
    [500, 291],
    [320, 586],
    [100, 460],
    [120, 558],
    [92, 18],
    [30, 72]
];

for( let i=0; i<inventory.length; i++){
    gold += (inventory[i][0]*0.9) * inventory[i][1];
}
console.log(`아이템 총 판매가격: ${gold}G`);