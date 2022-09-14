survey1 = ["AN", "CF", "MJ", "RT", "NA"];
choice1 = [5, 3, 2, 7, 5];

survey2 = ["TR", "RT", "TR"];
choice2 = [7, 1, 3];

function solution(survey, choices) {
    const regular = ["RT", "CF", "JM", "AN"];
    const suvv = {};
    regular.forEach((e,i) => {
        suvv[e[0]] = 0;
        suvv[e[1]] = 0; 
    });

    survey.forEach((el, i) => {        
        a = choices[i] <= 4 ? survey[i][1] : survey[i][0];  
        suvv[a]++
    });
    const kk = Object.getOwnPropertyNames(suvv);
    console.log(kk);
    console.log(suvv);
    const aa = "";
    console.log(aa);
    
    


    //return answer;
}

solution(survey1,choice1);
solution(survey2,choice2);
//   자료형태를 
//  AN: [0,0] 으로 만드는게 나아보임



