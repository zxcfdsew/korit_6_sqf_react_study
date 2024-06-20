import "./App.css";
import { useRef, useState } from "react";

function App() {
    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }
    const [ userList, setUserList ] = useState([]);
    const [ inputData, setInputData ] = useState({...emptyUser});

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const handleInputKeyDown = (e) => {
        const { password, username, name } = inputRef;
        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "username":
                    password.current.focus();
                    break;
                case "password":
                    name.current.focus();
                    break;
                case "name":
                    username.current.focus();
                    setUserList(userList => [ ...userList, inputData ]);
                    setInputData({...emptyUser});
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        });
    }

    return <>
        <input name="username" placeholder="사용자이름" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.username}
            ref={inputRef.username} />
        <input name="password" placeholder="비밀번호" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.password}
            ref={inputRef.password} />
        <input name="name" placeholder="이름" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.name}
            ref={inputRef.name} />
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
                {
                    userList.map(({ username, password, name }, index) => {
                        return (  // 가독성을 위해 괄호를 사용
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{username}</td>
                                <td>{password}</td>
                                <td>{name}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
}

export default App;