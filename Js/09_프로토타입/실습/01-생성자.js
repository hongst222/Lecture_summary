/** 멤버변수를 갖는 생성자를 통해서 객체 만들기 */
function User() {
    this._id = null;
    this._email = null;
}

//  생성자를 통한 객체 만들기
const foo = new User();
foo._id = "hello";
foo._email = "hello@Javascript.com";

console.log(foo);

const bar = new User();
bar._id = "hi";
bar._email = "hi@Javascript.com";

console.log(bar);