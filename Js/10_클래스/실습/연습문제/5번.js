/**
 * 
### 문제5
Stack은 배열을 내장하는 클래스로서 FILO(First Input Last Output, 선입후출) 기능을 구현하는 대표적인 자료구조 중 하나이다.

아래의 요구사항을 충족하는 MyList 클래스를 정의하시오.

1. 자료를 저장하기 위한 배열인 data와 배열의 원소 수를 카운트 하기 위한 size라는 멤버변수를 은닉된 형태로 선언한다.
2. 생성자에서는 data를 원소가 0개인 빈 배열로, size는 0으로 초기화 한다.
3. data와 size에 대한 getter는 갖지만 setter는 갖지 않는다.
4. push(item) 메서드는 파라미터로 전달된 값을 배열의 맨 뒤에 추가하고 size의 값을 1 증가시킨다.
5. pop() 메서드는 배열의 마지막 원소를 꺼내어 리턴하고 배열의 크기를 1 축소시킨다.
   - 이를 위해 data는 임시 변수에 깊은 복사 처리된 후 기존의 크기보다 1 작은 사이즈로 새로 초기화 되어야 한다
   - 깊은 복사 처리된 임시 변수의 원소 중에서 마지막 원소를 제외한 상태로 다시 data에 깊은 복사 처리되어야 한다.
   - 이 모든 과정은 slice() 등의 javascript 내장 함수를 사용하지 않고 반복문으로 직접 구현하시오.
6. 완성된 클래스는 아래의 테스트 코드를 사용하여 결과를 확인하시오.

 */
class MyList {
    #size
    #data   // 배열
    constructor(){
        this.#data = new Array(0);
        this.#size = 0;
    } 
    get data() {
        return this.#data;
    }
    get size() {
        return this.#size;
    }
    push(item) {
        this.#data[this.#size] = item;
        this.#size++
    }
    pop() {
        // 빈 배열의 경우.
        if(this.#size == 0){
            console.log("빈 배열입니다.");
            return;
        } else {
            // data 배열의 마지막 원소값을 tmp에 복사
            let tmp = this.#data[this.#size-1];
            // data2라는 배열을 data배열의 길이보다 1 작은 크기로 생성
            let data2 = new Array(this.#size-1);
            // data2에 data를 깊은 복사
            for(let i = 0 ; i<this.#size-1; i++){
                data2[i] = this.#data[i];
            }
            // data를 기존의 크기보다 1 작은 배열로 초기화
            this.#data = new Array(this.#size-1);

            // data2의 내용을 data에 깊은 복사
            for(let i = 0 ; i<this.#size-1; i++){
                this.#data[i] = data2[i];
            }
            // size 1 감소
            this.#size--;
            // data 배열의 마지막 원소값 리턴
            return tmp;
        }
    }

}

const list = new MyList();

list.push(100);
list.push(200);
list.push(300);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const x = list.pop();
console.log('추출된 데이터: %d', x);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.push(400);
list.push(500);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const y = list.pop();
console.log('추출된 데이터: %d', y);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.push(600);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const z = list.pop();
console.log('추출된 데이터: %d', z);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);





















