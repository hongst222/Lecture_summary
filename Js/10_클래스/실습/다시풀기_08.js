/** 종족의 공통 특성을 갖는 클래스 */
class Protoss {
    static upgrade = 0;
    /** 모든 객체가 갖는 명사적 특성들을 멤버변수로 정의 */
    constructor(name, hp, dps) {
        this._name = name;   //  이름
        this._hp = hp;       //  체력 (Health Point)
        this._dps = dps; //  초당공격력 (Damage Per Second)
    }

    /** 객체가 수행해야 하는 동작들을 함수 형태로 정의 */
    move(position) {
        console.log(this._name + "(이)가 " + position + "까지 이동합니다.");
    }
    attack(target) {
        console.log(this._name + "(이)가 " + target + "을 공격합니다. 데미지:" + this._dps);
    }
    upg() {
        Protoss.upgrade++;
        console.log("complete");
    }
    
}

class Zealot extends Protoss {
    constructor(name,hp,dps){
        super(name,hp,dps+Protoss.upgrade*2);
        console.log("[%s] 체력 : %d 공격력 : %d + %d",this._name, this._hp, dps, Protoss.upgrade*2);
    }
    sword(target) {
        this.attack(target);
        console.log(" >>>>> 검으로 찌르기");
    }
}

class Dragon extends Protoss {
    constructor(name,hp,dps){
        super(name,hp,dps+Protoss.upgrade*4);
        console.log("[%s] 체력 : %d 공격력 : %d + %d",this._name, this._hp, dps, Protoss.upgrade*4);
    }
    fire(target) {
        this.attack(target);
        console.log(" >>>>> 원거리 공격");
    }
}

z1 = new Zealot("Zealot no.1", 200, 20);
d2 = new Dragon("Dragon no.2", 400, 35);
z1.upg();
console.log(z1);
z2 = new Zealot("Zealot no.2", 200, 20);
console.log(z2);
console.log(d2);
d1 = new Dragon("Dragon no.1", 400, 35);
console.log(d1);