
import React from 'react'; 
import './App.css'
import Card from './components/Card'
import pic from './assets/avatar-659651_640.webp'
function App() {

  return (
    <> 
    <Card name={"Dev Sathwara"} place={"Surat"} age={20} pic={pic} likesCount={"202.2K"} followersCount={"80.8k"} photosCount={"1k"} />
    </>
  )
}

export default App
