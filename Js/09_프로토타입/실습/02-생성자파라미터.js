/** 파라미터를 멤버변수에 복사하는 생성자. */
function User2(id,email) {
    this._id = id;
    this._email = email;
}

const foo2 = new User2("hello", "hello@javascript.com");
const bar2 = new User2("hi", "hi@javascrpt.com");

console.log(foo2);
console.log(bar2);