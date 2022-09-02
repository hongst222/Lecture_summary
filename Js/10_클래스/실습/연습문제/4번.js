/** 문제 4번 */
//  다음을 만족하는 클래스 Account를 작성하시오.
//  1. 다음의 2개의 필드를 선언
//      문자열 owner; (이름);
//      숫자형 balance; (금액);
//  2. 위 모든 필드에 대한 getter와 setter 구현
//  3. 위 모든 필드를 사용하는 가능한 모든 생성자의 구현
//  4. 메소드 deposit()의 헤드는 다음과 같으며 인자인 금액을 저축하는 메소드
//     deposit(amount)
//  5. 메소드 withdraw()의 헤드는 다음과 같으며 인자인 금액을 인출(리턴)하는 메소드
//      withdraw(long amount)
//      인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력.

class Account {
    #owner;
    #balance;

    constructor(owner,balance){
        this.#owner = owner;
        this.#balance = balance;
    }
    
    get owner() {
        return this.#owner;
    }
    set owner(pr) {
        this.#owner = pr;
    }

    
    get balance() {
        return this.#balance;
    }
    set balance(pr) {
        this.#balance = pr;
    }
    //  4. 메소드 deposit()의 헤드는 다음과 같으며 인자인 금액을 저축하는 메소드
    //     deposit(amount)
    deposit(amount) {
        this.balance += amount;
        console.log(`${amount}원을 입금하였습니다. 잔액:${this.balance}`);
    }

    //  5. 메소드 withdraw()의 헤드는 다음과 같으며 인자인 금액을 인출(리턴)하는 메소드
    //      withdraw(long amount)
    withdraw(long_amount){
        if(long_amount<this.balance){
            this.balance -=long_amount
            console.log(`${long_amount}원을 출금하였습니다. 잔액: ${this.balance}`);
        } else {
            console.log(`출금하려는 돈: ${long_amount}, 잔액: ${this.balance}`);
            console.log("잔액이 부족합니다.");
        }
    }

    print_amount() {
        console.log(`계좌주 : ${this.owner}, 잔액 : ${this.balance}`);
    }
}

const bank = new Account("홍승택", 10000);
bank.print_amount();
bank.withdraw(15000);
bank.deposit(25000);
bank.withdraw(5000);
