import { useState } from "react";

function App() {
    const [ grade, setGrade ] = useState("");
    const [ group, setGroup ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ name, setName ] = useState("");

    const emptyStudent = {
        grade: "",
        group: "",
        number: "",
        name: ""
    }

    const [ student, setStudent ] = useState({...emptyStudent});  // emptyStudent를 쓰면 얕은 복사가 되기 때문에 스프레드를 통해 깊은복사

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "grade":
                setGrade(e.target.value);
                break;
            case "group":
                setGroup(e.target.value);
                break;
            case "number":
                setNumber(e.target.value);
                break;
            case "name":
                setName(e.target.value);
                break;
            default:
       }
    }

    // const handleInputChange2 = (e) => {
    //     setStudent(student => {
    //         return {
    //             ...student,
    //             [e.target.name]: e.target.value
    //         }
    //     });
    // }

    const handleInputChange2 = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        const [ name, value ] = e.target;
        const newStudent = {
            ...student,
            [name]: value
        }
        setStudent(newStudent);
    }

    return <>
        <input name="grade" placeholder="학년" onChange={handleInputChange} value={grade} />
        <input name="group" placeholder="반" onChange={handleInputChange} value={group}/>
        <input name="number" placeholder="번호" onChange={handleInputChange} value={number}/>
        <input name="name" placeholder="이름" onChange={handleInputChange} value={name}/>

        <ul>
            <li>학년: {grade}</li>
            <li>반: {group}</li>
            <li>번호: {number}</li>
            <li>이름: {name}</li>
        </ul>

        <input name="grade" placeholder="학년" onChange={handleInputChange2} value={student.grade} />
        <input name="group" placeholder="반" onChange={handleInputChange2} value={student.group}/>
        <input name="number" placeholder="번호" onChange={handleInputChange2} value={student.number}/>
        <input name="name" placeholder="이름" onChange={handleInputChange2} value={student.name}/>

        <ul>
            <li>학년: {student.grade}</li>
            <li>반: {student.group}</li>
            <li>번호: {student.number}</li>
            <li>이름: {student.name}</li>
        </ul>
    </>
}

export default App;