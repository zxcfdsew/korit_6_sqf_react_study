/*
  컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수
  컴포넌트 파일만 대문자로 시작한다 (기존 태그와 구별하기 위함)

  JSX 특징
  1. 태그를 열었으면 닫아야 한다. <a></a>, <a />
  2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다.
  3. JSX 안에 값 또는 변수를 사용하려면 {}표현식을 사용해야한다.
*/
import "./App.css";
import Box from "../components/Box";
import CustomInput from "../components/CustomInput";
import Hello from "../components/Hello";

function App() {
  const name = "김준일";
  const fontColorRed = {
    color: "red"
  }
  return <>
    <div>
      <Hello></Hello>
    </div>
    {/*<div>
      <Hello></Hello>
    </div>*/}
    <h1 style={fontColorRed} className={"fs-20 italic"}>{name}</h1>
      <CustomInput ph={"이름"} disabled={true} value={"김준일"}/>
      <CustomInput ph={"나이"} disabled={false}/>
      <CustomInput ph={"연락처"} disabled={true}/>
      {/* isShow만 적으면 true값 속성이 없으면 false */}
      <Box name={"김준일"} isShow={true}>
        <h2>{31}</h2>
        <h2>{31}</h2>
        <h2>{31}</h2>
      </Box>
    </>
}

export default App;
