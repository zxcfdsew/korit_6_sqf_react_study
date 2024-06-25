function SetTimeoutTest() {
    /**
     * 비동기
     */

    // 함수의 매개변수 안에 넣어주는 함수를 콜백함수라고 함
    // setTimeout의 첫번째 매개변수는 콜백함수
    setTimeout(() => {
        print(count);
    }, 2000);

    function print(fx) {
        console.log(4);
        fx();
    }

    function count() {
        console.log(1);
        console.log(2);
        console.log(3);
    }
    
    /**
     * 콜백함수
     */
    function test(fx) {
        console.log("test 함수 호출");
        fx();
    }

    function add() {
        console.log("add 함수 호출");
    }

    // 여기선 add가 콜백함수
    test(add);

    return (
        <>
        
        </>
    )
}

export default SetTimeoutTest;