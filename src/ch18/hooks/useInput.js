import { useState } from "react";

// 훅 함수를 이용해서 만든 함수를 커스텀 훅 함수라고 함, 함수 이름 앞에 use가 붙음
export function useInput(defaultValue, length) {
    const [ value, setValue ] = useState(defaultValue);

    const onChange = (e) => {
        if(e.target.value.length < length + 1) {
            setValue(e.target.value);
        }
    }

    return {
        value,
        setValue,
        onChange
    }
}