//가로 >= 세로

/**  가운데 노란색의 영역의 최대치는 */
// yellow = (가로-2) * (세로-2)
// brown = sum - (가로-2)*(세로-2)

// function solution(brown,yellow) {
//     const sum = brown + yellow;
//     let cnt = 0; 
//     for(let i = 2; i<sum; i++){
//         cnt ++;
//         if(sum%i == 0){
//             if( (i-2)*(sum/i -2) ===yellow ){
//                 console.log(cnt);
//                 return [sum/i, i];
//             }
//         }
//     }

// }

// function solution(brown, yellow) {
//     const horizonCases = [], verticalCases = [];
//     const width = brown + yellow;

//     for (let i = 3; i <= Math.ceil(Math.sqrt(width)); i++) {
//         if (width % i == 0) {
//             horizonCases.push(width / i);
//             verticalCases.push(i);
//         }
//     }

//     for (let i = 0; i < horizonCases.length; i++) {
//         const exceptTopBotLine = width - (2 * horizonCases[i]);
//         const ceterField = exceptTopBotLine - (2 * (verticalCases[i] - 2));
//         if (ceterField == yellow) return ([horizonCases[i], verticalCases[i]]);
//     }

//     return -1;
// }

function solution(brown, yellow) {
    const sum = brown + yellow;
    const rootSum = Math.ceil(Math.sqrt(sum));
    let arr = [];
    let cnt = 0;
    for (let i = 2; i <= rootSum; i++) {
        cnt++;
        if (sum % i == 0) {
            arr = [i, sum / i];

            for (let j = 0; j < 2; j++) {
                cnt++;
                if ((arr[j] - 2) * (sum / arr[j] - 2) === yellow) {
                    console.log('ct' + cnt);
                    return [sum / arr[j], arr[j]];
                }
            }
        }
    }

    return false;

}


console.log(solution(4006, 2000));
