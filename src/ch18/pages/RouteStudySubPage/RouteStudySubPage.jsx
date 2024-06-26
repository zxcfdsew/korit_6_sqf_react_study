/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import * as s from "./style";

function RouteStudySubPage() {
    return (
        <div>
            <ul>
                {/* 가능하면 절대경로를 사용하기 */}
                <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
            </ul>
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