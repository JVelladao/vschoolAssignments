import React from "react"
import Pets from "./Pets"










function Friend(props){

    const pett = props.pets.map(pet => {
        return <Pets 

            name= {pet.name}
            breed= {pet.breed}
        
        />
    })

    return(

        <div>

            <h1>Name: {props.name}</h1>

            <h3>Age: {props.age}</h3>

            {pett}
            
           

        </div>
    )
}

export default Friend