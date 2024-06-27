/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as s from "./style";

function RouteStudySubPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const index = location.pathname.lastIndexOf("/");
    console.log(index);
    console.log(location.pathname.substring(index + 1));

    const handleAgeClick = () => {
        // replace를 사용하면 history가 남지 않기 때문에 뒤로가기를 누르면 replace를 처음 쓴 위치로 이동함
        // replace옵션은 페이지를 새로 로드함
        navigate("/routestudy/page1/age", {replace: true});
        // window.location.href = "https://naver.com"=> replace: false
        // window.location.replace("https://naver.com") => replace: true
    }

    return (
        <div>
            <ul>
                {/* 가능하면 절대경로를 사용하기 */}
                <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
            </ul>
            <button onClick={handleAgeClick}>나이</button>
            <div>
                <Routes>
                    <Route path="/name" element={<h1>name1</h1>} />
                    <Route path="/age" element={<h1>age1</h1>} />
                    <Route path="/address" element={<h1>address1</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default RouteStudySubPage;