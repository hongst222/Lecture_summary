function solution(genres, plays) {
    // 가장 많이 재생된 장르를 찾아야함
    // 장르 내에서 많이 재생된 노래를 먼저 수록함 (재생 총합이 많은 순)
    // 장르 내에서 재생 횟수가 같다면 고유 번호가 낮은 노래를 먼저 수록 (크기 비교 <)
    
    // 장르 종류는 100개 미만
    
    // 맵을 두개를 만들어야 할까?
    
    let totalPlay = new Map();
    //let category = new Map();
    // 장르 재생 횟수 총합 구하기
    genres.forEach((e,i) => {
        totalPlay.set(genres[i], (totalPlay.get(genres[i])|0) + plays[i]);
    }); 
    // 장르 별 총 재생 횟수 출력
    console.log("장르 별 총 재생 횟수 출력");
    console.log(totalPlay);
   
    let total = Array.from(totalPlay.keys());
    console.log("장르 배열 생성");
    console.log(total);
    
    let js = {};
    total.forEach((e,i) => {
        js[e] = {
            first: [0,0],
            second: [0,0]
        };
    });// 번호, 횟수
    console.log("제이슨 형태 생성");
    console.log(js);
    
    // 1,2번째 횟수들 생성
    genres.forEach((e,i) => {
       if(js[e]["first"][1] < plays[i]){
           let tmp =js[e]["first"] 
           js[e]["first"] = [i,plays[i]];
           js[e]["second"] = tmp;
       } else if (js[e]["second"][1] <plays[i]){
           js[e]["second"] = [i,plays[i]];
       }  
    });
    console.log(js);
    
    
    // 장르 별 총 재생 횟수 내림 차순
    total.sort((a, b) => totalPlay.get(b)-totalPlay.get(a));
    console.log("재생 횟수 내림 차순");
    console.log(total);
    let answer = [];
    total.forEach((e,i) => {
        answer.push(js[e]["first"][0]);
        // js[e]["second"][1] (그 장르의 두번째로 많이 재생한 횟수)가 0 이면 그 장르의 음악은 한 가지 이므로 push하지 않음)
        if(js[e]["second"][1]){
            answer.push(js[e]["second"][0]);
        } 
    });
    
    return answer;
}