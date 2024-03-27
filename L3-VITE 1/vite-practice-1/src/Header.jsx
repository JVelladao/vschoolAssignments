import React from "react"

export default function Header(){
    return (
        <header className="header" >
            <img 
                src="https://ih1.redbubble.net/image.2464293211.7143/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

//  header className="header"
// h2 className="header--title"
//  h3 className="header--project"

/* <img 
                src="./images/troll-face.png" 
                className="header--image"
            /> */