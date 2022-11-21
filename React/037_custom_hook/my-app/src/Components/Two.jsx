// import React, { useState } from 'react';

// function Two() {
//     const [value, setValue] = useState('');
//     function onChange(e) {
//         setValue(e.target.value);
//     }
//     return (
//         <>
//             <input type="text" onChange={onChange}/>
//             <div>
//                 {value}가 강해졌다 돌격해!
//             </div>
//         </>
//     )
// }

// export default Two;

import React from 'react';
import useYoojin from '../Hook/useYoojin';

function InputComponent() {
    const [value, onChange] = useYoojin("");
    return (
        <>
            <input type="text" onChange={onChange}/>
            <div>
                {value}
            </div>
        </>
    )
}
export default InputComponent;