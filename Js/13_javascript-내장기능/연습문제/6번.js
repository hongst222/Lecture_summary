/** 문제6.
    수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

    마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때
    완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

 */

let participant1 = ["leo", "kiki", "eden"];
let completion1 = ["eden", "kiki"];

let participant2 = ["marina","josipa","nikola","vinko","filipa"];
let completion2 = ["josipa", "filipa", "marina", "nikola"];

let participant3 = ["mislav", "stanko", "steve", "ana"];
let completion3 = ["stanko", "ana", "mislav"];

let participant4 = ["mislav", "stanko", "mislav", "ana"];
let completion4 = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
   
    participant.sort();
    completion.sort();
    let answer = participant.find((e,i) => e !== completion[i]);


    return answer;
}
console.log(solution(participant1,completion1));
console.log(solution(participant2,completion2));
console.log(solution(participant3,completion3));
//console.log(solution(participant4,completion4));

