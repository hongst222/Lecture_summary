class Terran {
    /** 모든 객체가 갖는 명사적 특성들을 멤버변수로 정의*/
    #name;
    #hp;
    #dps;

    constructor(name, hp, dps){
        this.#name = name;
        this.#hp = hp;
        this.#dps = dps;
        console.log("[%s] 체력 : %d 공격력 : %d",this.name, this.hp, this.dps);
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }
    get hp() {
        return this.#hp;
    }
    set hp(value) {
        this.#hp = value;
    }
    get dps() {
        return this.#dps;
    }
    set dps(value) {
        this.#dps = value;
    }

    attack(target) {
        console.log(this.name + "(이)가 " + target + "(을)를 공격합니다. 데미지: " + this.dps);
    }
}

class Marine extends Terran {
    // attack 메서드 override
    attack(target) {
        console.log(this.name + "(이)가 " + target + "에게 사격합니다. 데미지: " + this.dps);
    }
}

class Tank extends Terran {
    attack(target) {
        super.attack(target);
        console.log('>>>>> 탱크 포격');
    }
}

class Firebat extends Terran {
    constructor(name) {
        // 클래스 상속 관계에서 부모의 생성자는 무조건 호출되어야 하므로,
        // 자식이 생성자를 갖는 경우 그 안에서 부모의 생성자를 강제 호출해야 한다.
        super(name, 500, 50);
    }
}

const m = new Marine("해병1", 120, 30);
//  자식 클래스에 의해 재정의된 기능 호출 --> 부모의 메서드는 가려진다.
m.attack("질럿");

const t = new Tank("탱크1", 120, 30);
t.attack("드라군");

const f = new Firebat('화염방사병');
f.attack("적");