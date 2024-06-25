import { useState } from "react";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");

    const handleloadImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        // fileElement.setAttribute("multiple", true);
        fileElement.click();

        // 파일 변경이 감지되면 실행
        fileElement.onchange = (e) => {
            const file = e.target.files[0];
            const fileReader = new FileReader();
            // 파일이 load되면 실행되는 함수 정의
            fileReader.onload = (e) => {
                // e.target.result에 불러들인 이미지 데이터가 들어감
                setImgSrc(e.target.result);
            }
            fileReader.readAsDataURL(file);
        }
    }

    return ( 
        <>
            <button onClick={handleloadImgClick}>이미지 불러오기</button>
            <input type="file" multiple={false} />
            <div>
                <img src={imgSrc} alt="" />
            </div>
        </>
     );
}

export default App;