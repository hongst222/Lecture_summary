let jobs = {
    office: [1, 2, 3, 4],
    production: [5, 6, 7, 8],
    sdfsf: [9, 10, 11, 12],
}

let a = {
    jobsCd: 1
};

function findJob(find,json){
    for (const key in json) {
        if (json[key].indexOf(find) !== -1) {
            return key;
        }
    }
}

console.log(findJob(a.jobsCd,jobs));