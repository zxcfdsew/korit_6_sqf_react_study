import React, { useCallback, useEffect, useMemo, useState } from 'react';

function MemoizationPage(props) {
    const [ value, setValue ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ num, setNum ] = useState(0);

    // dependency가 없으면 매번 실행
    // 상태가 변하면 MemoizationPage가 다시 실행됨

    const a = useMemo(() => {
        console.log(num);
        return num + 10
    }, [num]);

    const b = num + 20;

    let c = null;
    useEffect(() => {
        c = num + 30;
    }, [num]);

    // 최초의 한번만 정의됨
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    // 렌더링 될때마다 새로 정의됨(상태가 변할때마다)
    const handleChange2 = (e) => {
        setValue2(e.target.value);
    }

    const handleClick = useCallback(() => {
        setNum(parseInt(value));
    }, [value]);

    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange} />
            <input type="text" onChange={handleChange2} />
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default MemoizationPage;