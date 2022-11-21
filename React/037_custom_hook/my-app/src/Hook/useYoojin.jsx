import { useState } from 'react';
// One, Two의 공통 코드를 여기에 뺐습니다.
function useYoojin(initState) {
    const [value, setValue] = useState(initState);
    function onChange(e) {
        setValue(e.target.value);
    }
    return [value, onChange];
}

export default useYoojin;