/** 별찍기 */
/** 
*   i가 0일때 1회 수행 j<1
    i가 1일때 1회 수행 j<2
    i가 2일때 1회 수행 j<3
    i가 3일때 1회 수행 j<4
    i가 n일때 1회 수행 j<n+1
*/
for (let i=0; i<7; i++){
    let str = "";

    for(let j=0; j<i+1; j++){
        str += "*";
    }
    console.log(str);
}