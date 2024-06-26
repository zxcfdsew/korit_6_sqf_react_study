/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";

function App() {

    const [ width, setWidth ] = useState();
    const [ height, setHeight ] = useState();

    useEffect(() => {
        setWidth("500px");
        setHeight("500px");
    }, []);

    const handleChangeSize = () => {
        if (width === "500px") {
            setWidth("400px");
            setHeight("400px");
        } else {
            setWidth("500px");
            setHeight("500px");
        }
    }

    return (
        <div css={s.container1(width, height)}>
            <div css={s.container2}>
                <div css={s.container3}>
                    <button css={s.button} onClick={handleChangeSize}>버튼</button>
                </div>
            </div>
        </div>
    );
}

export default App;