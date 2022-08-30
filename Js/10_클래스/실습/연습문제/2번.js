/** 문제 2 */
//  가로(width), 세로(height) 정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.
//  이 클래스는 생성자의 파라미터가 없으며 
//  둘레의 길이를 구해 리턴하는 getAround()메서드와 넓이를 구해 리턴하는 getArea()메서드를 제공합니다.

//  클래스는 JSON형식으로 작성되어야 합니다.

class Rectangle {
    #width;
    #height;

    constructor(){
        this._width = null;
        this._height = null;
    }

      //  가로 값의 getter, setter
    get width() {
        return this.#width;
    }
    set width(pr) {
        this.#width = pr;
    }
    
    //  세로 값의 getter, setter
    get height() {
        return this.#height;
    }
    set height(pr) {
        this.#height = pr;
    }

    //  둘레의 길이를 구하는 getAround 메서드 정의
    getAround() {
        return (this.#height + this.#width)* 2;
    }
    
    //  넓이를 구하는 getArea() 메서드 정의
    getArea() {
        return this.#height * this.#width;
    }

}

const rec1 = new Rectangle();

rec1.height = 5;    //세로
rec1.width = 10;    //가로
console.log("둘레의 길이는 %d이고 넓이는 %d입니다.",rec1.getAround(), rec1.getArea());