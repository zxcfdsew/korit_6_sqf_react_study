import { useEffect, useState } from "react";

function App() {
    const [ number, setNumber ] = useState(0);
    const [ number2, setNumber2 ] = useState(0);
    const [ number3, setNumber3 ] = useState(0);

    // useEffect(함수, 배열(dependency));
    // 첫 호출때는 무조건 한번 실행됨 이후에는 number의 상태가 변할때마다 실행됨
    // dependency에 값이 없으면 초기세팅을 지정해두는 용도로 사용함 (처음 실행할때 한번만 실행하게 됨)
    // dependency는 배열이기 때문에 여러개의 상태를 넣어둘 수 있음
    useEffect(() => {
        // 마운트 지점
        setNumber3(number * 10);
        return () => {
            // 언마운트 지점
        }
    }, [number, number2]);

    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }

    return (
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>
    )
}

export default App;