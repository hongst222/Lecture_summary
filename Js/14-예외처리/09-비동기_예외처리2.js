/** 비동기 처리에 대한 예외처리 (2) */

const data = [1,2,3];

//  timer 처리와 같은 비동기 방식의 예외처리는 콜백함수 내부에서 처리해야 한다.
setTimeout(() => {
    try{
        
        console.log("배열 탐색 시작");
        for(let i =0; i<10; i++){
            console.log(data[i].toFixed(2));
        }
    } catch (err) {
        //setTimeout()과 같은 비동기 함수는 처리하지 못하기 때문에 이 블록은 실행되지 않는다.
        console.log('에러 발생 (2)');
        console.error(err.name);
        console.error(err.message);
    }
    //  콜백함수 내부에서 처리된 예외처리는 발생한 에러상황을
    //처리할 수 있기 때문에 아래의 코드는 정상적으로 실행된다.
    console.log("배열 탐색 종료");
},1000);
