import React from "react"

function Pets(props){
    return(
        <div>
            Pet:
            <span> Name: {props.name} </span>
            <span> | Breed: {props.breed}</span>
        </div>
    )
}

export default Pets