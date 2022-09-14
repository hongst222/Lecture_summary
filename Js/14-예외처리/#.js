function solution(sizes) {
    
    let max = new Array(2).fill(0);
    for(let j = 0; j<2; j++){
        sizes.forEach((e,i) => max[j] = max[j] < sizes[i][j] ? sizes[i][j] : max[j]); 
    }
    let answer = max[0] * max [1];
    return answer;
}

let size1 = [[60,50], [30, 70], [60, 30], [80, 40]];
let size2 = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];

size1.forEach((e,i) => console.log(size1[i][0])); 
console.log(solution(size1));