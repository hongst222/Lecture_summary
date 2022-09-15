function solution(clothes) {
    const map = new Map();
    
    clothes.forEach((e,i) => {
        map.set(e[1], (map.get(e[1])|0) + 1);
    });

    let arr = Array.from(map.keys());
    console.log(arr);
    
    let sum = 0;
    let mul = 1;
    arr.forEach((e,i) => {
        let a =map.get(e)
        sum += a;
        mul *= a;
    });
    return map.size != 1 ? sum+mul : sum; 

}

clothes1 = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
clothes2 = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];

console.log(solution(clothes1));


//


new Chart(mychart1, {
    
    type: 'line',

    
    data: {
        
        labels: names,
        
        datasets: [
            
            {
                label: '국어', 
                data: kor, 
                borderWidth: 1,
                borderColor: 'ff6600',
            },
            
            {
                label: '영어',
                data: eng,
                borderWidth: 3,
                borderColor: '#ff00ff',
            },
        ],
    },
    //  그래프 옵션
    options: {
        maintainAspectRatio: false,
    }
});