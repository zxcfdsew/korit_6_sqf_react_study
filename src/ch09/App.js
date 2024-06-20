import { useState } from "react";

function App() {
    const [ inputValue, setInputValue ] = useState("");
    const [ names, setNames ] = useState([]);
    const liList = [
        <li>{"test1"}</li>,
        <li>{"test2"}</li>,
        <li>{"test3"}</li>,
        <li>{"test4"}</li>
    ]

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            setNames(names => [ ...names, inputValue ]);
            setInputValue("");
        }
    }
    // 배열을 넣어주면 알아서 렌더링해줌(JSX에서는 ','을 알아서 없애줌)
    return <>
        <input onChange={handleInputChange} onKeyDown={handleInputKeyDown} value={inputValue} />
        <ul>
            { liList }
            {names.map((name, index) => <li key={index}>{name}</li> 
        )}
        </ul>
    </>
}
// map을 돌리면 무조건 key 값을 가져와야 함

export default App;