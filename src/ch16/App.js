import { useEffect, useState } from "react";
import "./App.css";

function App() {

    const emptyProfile = {
        imgSrc: "",
        name: "",
        email: ""
    }

    useEffect (() => {
        const lsProfile = localStorage.getItem("profile");
        setProfiles(!lsProfile ? [] : JSON.parse(lsProfile));
    }, []);
    
    const [ profiles, setProfiles ] = useState(emptyProfile);

    const handleProfileImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.click();
        fileElement.onchange = (e) => {
            const [ file ] = e.target.files;
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                setProfiles(profile => ({
                    ...profile,
                    imgSrc : e.target.result
                }));
            }
            fileReader.readAsDataURL(file);
        }
    }

    const handleSaveProfileClick = () => {
        localStorage.setItem("profile", JSON.stringify(profiles));
    }

    const handleInputChange = (e) => {
        setProfiles(profile => ({
            ...profile,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
        }));
    }

    return ( 
        <>
            <div className="container">
                <div className="profile-box">
                    <h1>프로필</h1>
                    <div className="profile-img" onClick={handleProfileImgClick}>
                        <img src={profiles.imgSrc} />
                    </div>
                    <p>이름</p>
                    <input type="text" name="name" value={profiles.name} onChange={handleInputChange}/>
                    <p>이메일</p>
                    <input type="text" name="email" value={profiles.email} onChange={handleInputChange}/>
                    <button onClick={handleSaveProfileClick}>저장</button>
                </div>
            </div>
        </>
     );
}

export default App;