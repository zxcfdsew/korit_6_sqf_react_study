import "./App.css";
import { useRef, useState } from "react";

function App() {

    const emptyUser = {
        id: "",
        username: "",
        password: "",
        name: ""
    }

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef(),
        delete: useRef()
    }

    const [ user, setUser ] = useState({...emptyUser});  // 깊은 복사로 할 것
    const [ userList, setUserList ] = useState([]);

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            switch (e.target.name) {
                case "username":
                    inputRef.password.current.focus();
                    break;
                case "password":
                    inputRef.name.current.focus();
                    break;
                case "name":
                    inputRef.username.current.focus();
                    setUserList(userList => [ ...userList, { ...user, id: getNewId() }]);
                    setUser({...emptyUser});
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setUser(user => {
            return {
                ...user,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleDeleteUser = (e) => {
        setUserList(userList.filter(({id}) => id !== parseInt(e.target.value)));
    }

    const getNewId = () => {
        const userIds = userList.map(user => user.id);
        const maxUserId = userIds.length === 0 ? 1 : Math.max.apply(null, userIds);
        return maxUserId + 1;
    }
    
    return <>
        {/* 
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 배열에 user객체 추가, 그리고 input value들 초기화
        */}
        <input name="username" placeholder="사용자명" onChange={handleInputChange} onKeyDown={handleKeyDown} ref={inputRef.username} value={user.username} />
        <input name="password" placeholder="비밀번호" onChange={handleInputChange} onKeyDown={handleKeyDown} ref={inputRef.password} value={user.password} />
        <input name="name" placeholder="이름" onChange={handleInputChange} onKeyDown={handleKeyDown} ref={inputRef.name} value={user.name} />
        {/* 
            3. tbody -> tr묶음을 usreList에서 map을 통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb;
        */}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                { userList.map((user, index) => {
                    // key값은 렌더링 되는 부분의 첫번째에만 주면 됨
                    return (
                        <tr key={user.id}>
                            <th>{index + 1}</th>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.name}</td>
                            <td>
                                <button onClick={handleDeleteUser} ref={inputRef.delete} value={user.id}>삭제</button>
                            </td>
                        </tr>
                    )})}
            </tbody>
        </table>
    </>
}

export default App;