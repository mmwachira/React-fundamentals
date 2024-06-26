import React, { useState } from "react"

function Button(){

    const [count, setCount] = useState(0);

    function handleClick(){
        //alert('You clicked me!');
        setCount(count + 1);
    }

    return(
        <button onClick={handleClick}>Clicked {count} times</button>
    );

}

export default Button;