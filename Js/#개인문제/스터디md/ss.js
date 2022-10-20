function solution(citations) {
    citations.sort((a,b) => b-a);
    console.log(citations);
    let answer = 0;
    let i = 0;
    while(i < citations[i]){
        answer++;
        i++
    }
    return answer;
    
}

console.log(solution([0,0,0,0]));
