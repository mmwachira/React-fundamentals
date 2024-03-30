import React from 'react'

const user = {
    name: "Martin Wachira",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 120,
  };

function AboutPage(){

    return(
        <>
            <h1>About</h1>
            <p>Hello, my name is {user.name}.<br/>How do you do?</p>
            <img 
            src={user.imageUrl} 
            style={{width: user.imageSize,
            height: user.imageSize}} 
            />
    
        </>
    );
    
}

export default AboutPage;