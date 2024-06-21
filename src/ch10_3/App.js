import Swal from "sweetalert2";
import "./App.css";
import { useRef, useState } from "react";

function App() {
    const test = {
        a: "aaa",
        b: "bbb"
    }
    // 객체인 데이터도 [] 안에 값을 넣어주면 key값으로 가져올 수 있다.(문자열이 들어와야 함)
    // console.log(test.a);
    // console.log(test["a"]);

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

    const handleEditClick = (key, index) => {
        Swal.fire({
            title: `${key} edit`,
            input: "text",
            inputValue: userList[index][key],
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "확인"
        }).then(result => {
            if (result.isConfirmed) {
                setUserList(userList => [ ...userList.map((user, i) => {
                    if (i === index) {
                        return {
                            ...user,
                            [key]: result.value
                        }
                    }
                    return user;
                 })]);
            }
        });
    }

    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList.filter(({id}) => id !== parseInt(e.target.value)));
            }
        });
        // if(window.confirm("해당 사용자를 삭제하시겠습니까?")) {
        //     // setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value))]);
        // }
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
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                { userList.map((user, index) => {
                    // key값은 렌더링 되는 부분의 첫번째에만 주면 됨
                    return (
                        <tr key={user.id}>
                            <th>{index + 1}</th>
                            {/* onClick안에는 함수호출이 아니라 함수 정의가 들어가야함 */}
                            <td onClick={() => handleEditClick("username", index)} >{user.username}</td>
                            <td onClick={() => handleEditClick("password", index)} >{user.password}</td>
                            <td onClick={() => handleEditClick("name", index)} >{user.name}</td>
                            <td>
                                <button value={index}>edit</button>
                            </td>
                            <td>
                                <button onClick={handleDeleteClick} ref={inputRef.delete} value={user.id}>delete</button>
                            </td>
                        </tr>
                    )})}
            </tbody>
        </table>
    </>
}

export default App;