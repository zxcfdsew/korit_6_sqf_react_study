/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudyPage from "../../pages/RouteStudyPage/RouteStudyPage";
import HomePage from "../../pages/HomePage/HomePage";
import ParamsStudyPage from "../../pages/ParamsStudyPage/ParamsStudyPage";
import SearchParamsStudyPage from "../../pages/SearchParamsStudyPage/SearchParamsStudyPage";
import CustomHookPage from "../../pages/CustomHookPage/CustomHookPage";
import MemoizationPage from "../../pages/MemoizationPage/MemoizationPage";

function MainBody() {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="routestudy/*" element={<RouteStudyPage />} />
                {/* 주소창에 /params/name까지만 입력하면 없는 페이지가 나옴, 무조건 age까지 입력해줘야함 */}
                {/* 만약 /params/name 까지만 입력해도 페이지가 나오게 하려면 path="/params/:name/*"로 두고 안에 서브라우터를 만들어야 함 */}
                <Route path="/params/:name/:age" element={<ParamsStudyPage />} />
                <Route path="/searchparams" element={<SearchParamsStudyPage />} />
                <Route path="/customhook/:id" element={<CustomHookPage />} />
                <Route path="/memoization" element={<MemoizationPage />} />
            </Routes>
        </div>
    );
}

export default MainBody;