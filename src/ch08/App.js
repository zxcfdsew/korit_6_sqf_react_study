import { useRef } from "react";

function App() {
    const inputRef = {
        a: useRef(),
        b: useRef(),
        c: useRef()
    }

    // use가 붙으면 Hook 함수, 함수 내부에 존재할 수 없고 함수 최상단에 모아둠
    // const aRef = useRef();
    // const bRef = useRef();
    // const cRef = useRef();

    // aRef.current가 input의 첫번째 객체
    // console.log(inputRef.a.current);
    // console.log(inputRef.b);
    // console.log(inputRef.c);
    
    const handleKeyDown = (e) => {
        // const inputs = document.querySelectorAll("input");  // virtual DOM을 거치지 않고 real DOM에 직접 접근함 (리액트는 이렇게 사용하면 안됨)
        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "a":
                    inputRef.b.current.focus();
                    break
                case "b":
                    inputRef.c.current.focus();
                    break;
                case "c":
                    inputRef.a.current.focus();
                    break;
                default:
            }
        }
    }

    return <>
        <input name="a" onKeyDown={handleKeyDown} ref={inputRef.a}/>
        <input name="b" onKeyDown={handleKeyDown} ref={inputRef.b}/>
        <input name="c" onKeyDown={handleKeyDown} ref={inputRef.c}/>
    </>
}

export default App;