import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Meme() {
  
const [allMemeImages, setAllMemeImages] = React.useState([])




React.useEffect(() => {
  axios.get("https://api.imgflip.com/get_memes")
    .then(res => setAllMemeImages(res.data.data.memes))
    .catch(err => console.log(err))
},[])
console.log(allMemeImages)
const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  
  const [savedMemes, setSavedMemes] = useState([]);

  function getMemeImage(){
    const memesArray = allMemeImages 
    const randomNumber = Math.floor(Math.random() * memesArray.length) 
    const Url = memesArray[randomNumber].url 
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImage:Url
      }))

  }

function handleChange(event){
     const {name, value} = event.target 
       setMeme(prevMeme => ({
         ...prevMeme,
         [name]: value
       }))
   }


   const saveMeme = () => {
    setSavedMemes((prevMemes) => [...prevMemes, meme]);
  };
   


  return (
    
      <main>
          <div className="form">

              <input
                type="text"
                placeHolder="Top Text"
                onChange={handleChange}
                name="topText"
                value={meme.topText}
                className="form--input"
              />
              <br />
              <br />
              <input
                type="text"
                placeHolder="Bottom Text"
                onChange={handleChange}
                name="bottomText"
                value={meme.bottomText}
                className="form--input"
              />
                <br />
                <br />
              <button 
              className="form--button"
              onClick={getMemeImage}
              >
                Get New Meme Image
              </button>

              <button onClick={saveMeme}>
              Save Meme
              </button>


              
          </div>
          
          <div className="meme">
            <img className="meme--image" src={meme.randomImage}/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            
          </div>

          <div >
            <h2>Saved Memes</h2>
            {savedMemes.map((savedMeme, index) => (
           <div key={index} className="meme">
            <img src={savedMeme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{savedMeme.topText}</h2>
            <h2 className="meme--text bottom">{savedMeme.bottomText}</h2>
          </div>
))}


        </div>
          







      </main>
  
  )
}


