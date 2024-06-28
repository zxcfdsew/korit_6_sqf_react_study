import "./App.css";

function App() {
    return (
        <div className="container">
            <h1>회원정보 수정</h1>
            <div className="input-text">이름:</div>
            <input type="text" />
            <div className="input-text">이메일:</div>
            <input type="text" />
            <div className="input-text">비밀번호:</div>
            <input type="text" />
            <button>저장</button>
        </div>
    );
}

export default App;