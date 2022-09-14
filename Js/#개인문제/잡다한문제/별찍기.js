for (let i = 1; i<5; i++){
    let str ="";
    for (let j=1; j<5; j++){
        str +=" ";
        if(j >= 5-i){
            str += "*"
        }
    }
    console.log(str);
}
console.log(" ");

for(let i=1; i<5; i++){
    let str = " ";
    for (let j=1; j<i+4; j++){
        if(j >= 5-i){
            str += "*"
        } else {
            str +=" ";
        }
    }
    console.log(str);
}
for(let i=3; i>0; i--){
    let str = " ";
    for (let j=1; j<i+4; j++){
        if(j >= 5-i){
            str += "*"
        } else {
            str +=" ";
        }
    }
    console.log(str);
}