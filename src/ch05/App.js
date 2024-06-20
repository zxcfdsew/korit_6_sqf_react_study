import { useState } from "react";

function App() {
    // 이름이 inputValue인 상태, useState()의 파라미터 값은 초기값
    const [ inputValue, setInputValue ] = useState("");

    // 랜더링될때마다 재정의됨
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleResetClick = () => {
        setInputValue("");
    }

    return <>
        <h3>값: { inputValue }</h3>
        <button onClick={handleResetClick}>초기화</button>
        <input type="text" onChange={handleInputChange} value={inputValue}/>
    </>
}

export default App;