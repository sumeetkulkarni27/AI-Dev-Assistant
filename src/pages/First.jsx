import React from 'react'
import {useState} from "react";

const First = () =>  {
    const [images,setImages]=useState(null)
  const [value,setValue]=useState(null)

  const surpriseOptions=[
    'A blue ostrich eating melon',
    'A pineapple'
  ]

  const surpriseMe=()=>{
    setImages(null)
    const randomValue = surpriseOptions[Math.floor(Math.random()*surpriseOptions.length)]
    setValue(randomValue)
  }

  const getImages=async ()=>{
    setImages(null)
    try{
      const options={
        method:"POST",
        body:JSON.stringify({
          message:value
        }),
        headers:{
          "Content-type":"application/json"
        }
      }
      const response= await fetch("http://localhost:8000/images",options)
      const data=await response.json()
      console.log(data)
      setImages(data)
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className="app">
      <section className="search-section">
        <p>Start with a detailed description
        <span className="surprise" onClick={surpriseMe}>Generate random Images</span>
        </p>

        <div className="input-container">
        <input value={value} placeholder="Enter your Description here" onChange={e=> setValue(e.target.value)} />
        <button onClick={getImages}>Generate</button>
        </div>
      </section>
      <section className="image-section">
        {images?.map((image,_index) => (
          <img key={_index} src={image.url} alt="pictur here"/>
  ))}
      </section>
    </div>
  );
}


export default First;