/** 문제 2 */
//  가로(width), 세로(height) 정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.
//  이 클래스는 생성자의 파라미터가 없으며 
//  둘레의 길이를 구해 리턴하는 getAround()메서드와 넓이를 구해 리턴하는 getArea()메서드를 제공합니다.

//  클래스는 JSON형식으로 작성되어야 합니다.

function Rectangle() {
    this._width = null;
    this._height = null;
}

Rectangle.prototype = {
    //  가로 값의 getter, setter
    get width() {
        return this._width;
    },
    set width(pr) {
        this._width = pr;
    },
    
    //  세로 값의 getter, setter
    get height() {
        return this._height;
    },
    set height(pr) {
        this._height = pr;
    },

    //  둘레의 길이를 구하는 getAround 메서드 정의
    getAround : function() {
        return (this._height + this._width)* 2;
    },
    
    //  넓이를 구하는 getArea() 메서드 정의
    getArea : function() {
        return this._height * this._width;
    }
};

//  Rectangle 클래스를 이용하여 객체 rec1 생성
const rec1 = new Rectangle();

rec1.height = 5;    //세로
rec1.width = 10;    //가로
console.log("둘레의 길이는 %d이고 넓이는 %d입니다.",rec1.getAround(), rec1.getArea());