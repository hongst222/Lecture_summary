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
    
    // 신고당한 횟수, 내역을 넣어주기 위한 데이터 생성.
    const userList = id_list.reduce((result, currentID) => {
        result[currentID] = [0, []];
        return result; 
    },{});
    //console.log(userList);

    //  신고내역 뽑아내기
    //  userlist[id][0] 에 신고당한 횟수.
    //  userlist[id][1] 에 신고내역
    //  report 파라미터를 사용하여 신고내역을 넣어줄 것임.
    //  report 파라미터(신고내역)의 중복값을 제거하고 분해할것. ( "new Set(report)" )
    //  분해는 .split(" ")으로 빈 여백을 기준으로 분해할 것.
    //  나눈 것을 신고자 , 신고당한자 로 구분하여 넣어야함.
    for (const id of new Set(report)) {
        //  여백을 기준으로 앞이 신고자, 뒤가 신고당한자.
        //  REPORTER에 앞 REPORTED에 뒤를 넣어줌
        const [REPORTER, REPORTED] = id.split(" ");
        //  신고당한사람 신고누적
        userList[REPORTED][0]++;
        //  신고자 신고내역
        userList[REPORTER][1].push(REPORTED);

    }
    //console.log(userList);

    //  정지유저, 이메일
    const bannedUser = id_list.filter(id => userList[id][0] >= k );
    // console.log(bannedUser);
    const emailLog = id_list.map(id => {
        return userList[id][1].filter(reportLog => bannedUser.includes(reportLog)).length;
    })
    
    console.log(emailLog);
}

solution(id_list1,report1,k);
solution(id_list2,report2,k);
