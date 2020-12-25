import React, { useState } from 'react';


const CountHook = () => {
   const [add, setadd] = useState(0);

    function addone(){
        // console.log("one");
        setadd(add + 1);
    }
    function deductone(){
        setadd(add-1);
    }
return(<div><p>{add}</p>
<button onClick={addone}>add one</button>
<button onClick={deductone}>deduct one</button></div>)
}

export default CountHook;