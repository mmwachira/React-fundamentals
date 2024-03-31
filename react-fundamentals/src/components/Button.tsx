import React from "react"

function Button(){

    function handleClick(){
        alert('You clicked me!');
    }

    return(
        <button onClick={handleClick}>First Button</button>
    );

}

export default Button;