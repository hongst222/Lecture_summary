/** JSON을 활용한 클래스 정의하기*/
//  생성자와 멤버변수 정의
function Member(username, password) {
    this._username = username;
    this._password = password;
}

//  getter, setter, 메서드 일괄정의
Member.prototype = {
    get username() {
        return this._username;
    },
    set username(pr) {
        this._username = pr;
    },

    get password() {
        return this._password;
    },
    set password(pr) {
        this._password = pr;
    },

    //  로그인을 수행하는 메서드
    login : function() {
        console.log("[Member] 로그인 되었습니다. username = %s, password = %s", this._username, this._password);
    },
    logout : function() {
        this._username = "";
        this._password = "";
        console.log("[Member] 로그아웃 되었습니다. username = %s, password = %s", this._username, this._password);
    }
};
console.log(Member.prototype);


//  생성자를 통한 객체 생성
const member1 = new Member('hi', '1234');

//  getter를 통한 멤버변수 반환받기
console.log(member1.username);
console.log(member1.password);

//  메서드 호출
member1.login();
member1.logout();

//  setter를 통한 멤버변수 변경
member1.username = 'world';
member1.password = '1212'; 

//  메서드 호출
member1.login();
member1.logout();