id_list1 = ["muzi", "frodo", "apeach", "neo"];
report1 = [
    "muzi frodo",
    "frodo muzi",
    "frodo neo",
    "muzi neo",
    "apeach muzi"
];

id_list2 = ["ryan", "con"];
report2 = [
    "ryan con",
    "ryan con",
    "ryan con",
    "ryan con"
];
k = 2;
function solution(id_list, report,k) {

    let answer = new Array(id_list.length).fill(0);
    const userLog = id_list.reduce((list, id) =>{
        list[id] = [];
        return list; 
    },{});

    //신고 중복 제거
    // report.map(id => {
    //     const[reporter, target] = id.split(' ');
    //     if(!userLog[reporter].includes(target)) userLog[reporter].push(target); 
    // });
    for(const id of new Set(report)){
        const [reporter, target] = id.split(' ');
        userLog[target].push(reporter);
    }
    console.log(userLog);
    for (const key in userLog){
        
        if(userLog[key].length>=k){
            
            userLog[key].map(id =>{
                answer[id_list.indexOf(id)] +=1;
            });

        }
    }
    return answer;
    
};

console.log(solution(id_list1,report1,k));