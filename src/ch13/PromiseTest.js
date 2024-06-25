function PromiseTest() {
    /**
     * Promise 비동기 객체
     * 
     * Promise의 3가지 상태
     * 1. 대기 -> 이행되지도 거부되지도 않은 상태
     * 2. 이행(resolve) -> 연산이 성공했을 때의 상태, then
     * 3. 거부(reject) -> 연산을 실패했을 때의 상태, catch
     * 
     * - Promise는 생성이 되면 바로 실행됨 (함수 안에 정의되어 있으면 실행되지 않고 호출시에만 실행됨)
     * - 생성하고 호출까지는 동기로 실행
     * 
     * resolve를 만나기 전까지의 모든 코드는 대기상태 resolve를 만나면 이행상태
     */

    function p1(name) {
        return new Promise((resolve, reject) => {
            // 대기 상태(동기)
            console.log(name + " 프로미스 생성");
            if(!name) {
                // 거부 상태
                reject("오류 !!!");
            }
            // 이행 상태, resolve의 매개변수는 then을 실행할 때 넘겨줄 값
            // resolve가 호출되면 then에 있는 코드가 실행됨(resolve가 호출되지 않으면 then은 실행 X)
            resolve(name);
        });
    }

    
    async function p2() {
        let a = null;
        try {
            // await : 이행할 때까지 기다려(동기처리)
            // await은 async 안에서만 사용할 수 있고, Promise 객체에만 사용할 수 있다.
            a = await p4();  // then의 return값을 a대입해줌 (async 함수의 return 값을 대입해줌)
            // setTimeout(() => {}, 2000);  // return이 promise값이 아니기 때문에 await를 사용 불가능

            // await은 예외도 받아올 수 있기 때문에 예외처리를 해줘야 한다. promise를 동기처리 하는 방법
            await p5();
        } catch(error) {
            console.log(error);
            a = "p5";
        }
        return a;
    }

    function p3() {
        return new Promise((resolve, reject) => {
            // return은 이행하지 않음
            // return "p3"
            resolve("p3");
        });
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!!");
    }

    const handleClick = () => {
        //then의 매개변수에는 resolve에서 가져온 값을 넣어줌
        p1("p1").then(result => {
            console.log("이행");
            console.log(result);
            if(true) {
                // then에서의 거부(throw로 에러를 던져주면 거부상태, catch의 코드가 실행)
                throw new Error("거부");  // 새로운 에러 생성
            }
            // return은 이행상태, 리턴값은 다음 then의 매개변수로 전달됨
            // return은 없어도 다음 then이 실행됨, 넘겨준 값은 없음
            return "두번째 then";
        }).then(result => {
            console.log(result);
        }).catch( error => {  // catch는 reject가 호출됬을때 실행
            // console.log(error);
        });
        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");

    }

    const handleClick2 = () => {
        // 2초 뒤에 p2() 호출, setTimeout은 최상위에서 사용해야함
        setTimeout(() => {
            p2().then(r => {
                console.log(r);
            })
        }, 2000);
        
        // p3().then(r => console.log(r));
    }

    return ( 
        <>
            <button onClick={handleClick}>promise</button>
            <button onClick={handleClick2}>async</button>
        </>
     );
}

export default PromiseTest;