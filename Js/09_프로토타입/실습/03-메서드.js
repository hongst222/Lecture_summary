/** prototype을 활용한 메서드 정의 */
const User3 = function(id, email) {
    this._id = id;
    this._email = email;
};

//  로그인을 수행하는 메서드
User3.prototype.login = function() {
    //  객체안에 속한 메서드 안에서는 생성자가 정의한 멤버변수를 마음껏 활용할 수 있다.
    console.log("로그인 되었습니다. -> id = %s , email = %s",this._id, this._email);
};

//  로그아웃을 수행하는 메서드
User3.prototype.logout = function() {
    console.log("로그아웃 되었습니다 -> id = %s, email = %s", this._id, this._email);
};

//  객체 생성
const student = new User3('학생', 'tmdxor97@naver.com');

//  객체 안에 내장된 메서드 호출하기
student.login();
student.logout();

//  객체 생성하기
const teacher = new User3('강사', 'teacher@gmail.com');

teacher.login();
teacher.logout();

teacher._id = '선생님';
teacher._email = 'teacher@naver.com';
teacher.login();
teacher.logout();