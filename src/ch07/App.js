import { useState } from "react";

function App() {

    // const emptyUser = {
    //     username: "",
    //     password: "",
    //     email: ""
    // }

    // const [ userInfo, setUserInfo ] = useState({...emptyUser});
    // const [ user, setUser ] = useState({...emptyUser});

    // const handleUserInfo = (e) => {
    //     setUserInfo(userInfo => {
    //         return {
    //             ...userInfo,
    //             [e.target.name]: e.target.value
    //         }
    //     });
    // }

    // const handleConfirmClick = (e) => {
    //     setUser(userInfo);
    // }

    // return <>
    //     <input name="username" onChange={handleUserInfo} placeholder="사용자이름" value={userInfo.username}/>
    //     <input name="password" onChange={handleUserInfo} placeholder="비밀번호" value={userInfo.password}/>
    //     <input name="email" onChange={handleUserInfo} placeholder="이메일" value={userInfo.email}/>
    //     <button onClick={handleConfirmClick}>확인</button>
    //     <ul>
    //         <li>사용자이름: {user.username}</li>
    //         <li>비밀번호: {user.password}</li>
    //         <li>이메일: {user.email}</li>
    //     </ul>
    // </>

    // -----------------------------------

    const emptyUser = {
        username: "",
        password: "",
        email: ""
    }

    const [ user, setUser ] = useState({...emptyUser});
    const [ inputData, setInputData ] = useState({...emptyUser});

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleOkClick = () => {
        setUser(inputData);
    }

    return <>
        <input name="username" onChange={handleInputChange} placeholder="사용자이름" value={inputData.username} />
        <input name="password" onChange={handleInputChange} placeholder="비밀번호" value={inputData.password} />
        <input name="email" onChange={handleInputChange} placeholder="이메일" value={inputData.email} />
        <button onClick={handleOkClick}>확인</button>
        <ul>
            <li>사용자이름: {user.username}</li>
            <li>비밀번호: {user.password}</li>
            <li>이메일: {user.email}</li>
        </ul>
    </>
}

// input의 value는 상태를 value값으로 만들어줘야 함
// value를 안쓰면 real DOM에는 값이 계속 바뀌지만, virtual DOM에서는 값이 바뀌지 않음 (리액트에서는 real DOM과 virtual DOM이 항상 동기화되어야 함)

export default App;