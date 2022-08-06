/**실습과제

Peter Kim(26세, 남성)은 이제 막 한국에서 거주하기 시작한 싱가포르 사람입니다. 
한국에서는 나이와 성별 따라 호칭 다르다는 것에 Peter는 큰 어려움을 느끼고 있는데요.

한국에서는:

1. 나이가 같은 경우: '친구'
2. 자신보다 나이가 어릴 경우:
2 - 1. 상대방 성별이 남성인 경우: '남동생',
2 - 2. 상대방 성별이 여성인 경우: '여동생'
3. 자신보다 나이가 많을 경우:
3 - 1. 상대방 성별이 남성인 경우: '형',
3 - 2. 상대방 성별이 여성인 경우: '누나'

라고 말하는 게 너무 어렵다고 합니다.
이런 Peter를 위해서 미리 자신의 나이와 성별을 입력해두고, 상대방의 나이와 성별을 전달하면 호칭을 판별해주는 `whatShouldICallYou`함수를 만들어줍시다.

코드를 잘 작성했다면, 다음과 같은 결과가 출력되어야 합니다.
 */

/**문제파악
 * 필요 변수 age(나이), gender(성별)  
 * 나이비교, 성별비교 --> 나이? --> 성별 순 
 */
let peterAge = 26;
function whatShouldICallYou(age,gender){
    if (age == peterAge){
        return "친구";
    }else if(age < peterAge){
        return gender == "남성" ? "남동생" : "여동생";
    }else {
        return gender == "남성" ? "형" : "누나";
    }
}
console.log(whatShouldICallYou(26,"여성"));
console.log(whatShouldICallYou(26,"남성"));
console.log(whatShouldICallYou(24,"여성"));
console.log(whatShouldICallYou(24,"남성"));
console.log(whatShouldICallYou(27,"여성"));
console.log(whatShouldICallYou(27,"남성"));
