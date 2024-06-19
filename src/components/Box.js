function Box({ name, isShow, children }) {
    // &&앞의 값이 true면 뒤에 값을 출력 아니면 false 출력, 자바스크립트 문법
    const result = true && 10;
    console.log(result);
    return <div>
        <h1>{name}</h1>
        {children}
        {/* true, false, null 값은 문자열로 표시하지 않음 */}
        {/* 표현식 안에서 연산자 사용가능 */}
        {1 + 1}
        {isShow && <h3>안녕하세요</h3>}
        {isShow ? <h3>안녕하세요</h3> : <h4>안녕하세요</h4>}
    </div>
}

export default Box;