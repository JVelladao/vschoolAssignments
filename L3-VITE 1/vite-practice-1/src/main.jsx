import React from 'react'
import ReactDOM from 'react-dom/client'
import Meme from './Meme.jsx'
import Header from './Header.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    
    <Meme />
  </React.StrictMode>,
)
