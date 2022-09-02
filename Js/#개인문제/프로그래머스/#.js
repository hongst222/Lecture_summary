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
function solution(id_list, report, k) {
    userList = id_list.reduce((list,id) => {
        list[id] = [0, [] ];
        return list;
    },{});

    for(const z of report){
        const[REPORTER,REPORTED] = z.split(' ');
        userList[REPORTER][1].push(REPORTED);
        userList[REPORTED][0]++;
    }

    const bannedUser = id_list.filter(id => userList[id[0]] >=k);

    const emailLog = id_list.map(id => {
        userList[id][1].filter(reportedId => bannedUser.includes(reportedId)).length;
    });
    
    return emailLog;
}

solution(id_list1,report1,k);
solution(id_list2,report2,k);
