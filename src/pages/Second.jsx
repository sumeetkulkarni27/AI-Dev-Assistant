import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Second = () =>  {

  const [value,setValue]=useState("")
  const [queryy, setQueryy] = useState("");

    const getQuery=async ()=>{
      // try{
      //   const options={
      //    method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ queryDescription: value }),
      //   }
  
      //   const response = await fetch("http://localhost:8000/error",options)
      //   const data = await response.json();
      //   console.log("sumeet");
      //   console.log(data);
      //   setQueryy(data);
  
      // }catch(error){
      //     console.log(error);
      //   }
     
      // console.log("sumee"+queryy);



      try{
        await axios.post("http://localhost:8000/error",{
          queryDescription:value
        }).then(res=>{
          if(res.data==="fail"){
            alert('failed')
          }
          else{
            setQueryy(res.data)
          }
        })
        .catch(e=>{
  
        })
      }catch(e){
        console.log(e);
      }
    };
  return (
    <div className="code">
    <p className='resolve'>Error Resolver</p>
      <textarea className="input" value={value} placeholder="Paste your error here" onChange={e=> setValue(e.target.value)} />
      <div className="code-display-s">
      <div className="code-output">
      {queryy ? (
        <p>{queryy}</p>
      ) : (
        <p className='p'>
        Your output will load here
        </p>
      )}
      </div>
      </div>
      <div className="button-container">
        <button id="solution" onClick={getQuery}>Get solution!</button>
      </div>
    </div>
  );
}

export default Second
