// name, speed dps 멤버변수 갖는..

class MyUnit {
    name;   // 이름
    speed;  // 속도
    dps     // damage per second 초당 공격력.

    constructor(name, speed, dps){
        this.name = name;
        this.speed = speed;
        this.dps = dps;
        console.log(`>>> 생성자를 통한 ${this.name} 객체 초기화 완료 (속도 = ${this.speed}, 공격력 = ${this.dps})`);
    }

    move(where) {
        console.log(`${this.name}(이)가 ${where}(으)로 ${this.speed}의 속력으로 이동합니다. `);
    }

    attack(target) {
        console.log(`${this.name}(이)가 ${target}에게 초당 ${this.dps}의 데미지를 입힙니다.`);
    }
}

//  단일 객체 사용
const marin = new MyUnit("Night", 5, 10);
marin.move("던전");
marin.attack("골렘");

//  객체 배열 사용
const team = [
    new MyUnit("기사", 5, 10),
    new MyUnit("힐러", 15, 1),
    new MyUnit("성직자", 7, 20)
];

for (const k of team){
    k.move("던전");
    k.attack("보스");
}