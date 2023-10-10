// create your App component here
import React,{useEffect, useState} from 'react'

const App = () => {
    const [img,setImg]=useState("")
    const Fetcher = async ()=>{
        const resp = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await resp.json()
        setImg(data.message)
        console.log(data.message)
    }
    useEffect(()=>{
     Fetcher()
     
    },[])
   
  {  if(img == "") return  <p>Loading...</p>
    else  return <img src={img} alt='A Random Dog'></img>}
   
  
}

export default App