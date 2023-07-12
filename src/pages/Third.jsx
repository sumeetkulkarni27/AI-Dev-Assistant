import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function Third() {
  const [userPrompt, setUserPrompt] = useState("");
  const [queryy, setQueryy] = useState("");


  const onSubmit = async () => {
    
    // try{
    //   const options={
    //    method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ queryDescription: userPrompt }),
    //   }

    //   const response = await fetch("http://localhost:8000/generate",options)
    //   const data = await response.json();
    //   console.log("sumeet");
    //   console.log(data);
    //   setQueryy(data);

    // }catch(error){
    //     console.log(error);
    //   }

    try{
      await axios.post("http://localhost:8000/generate",{
        queryDescription:userPrompt
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
   
    // console.log("sumee"+queryy);
  };

  return (

    <div className='code'>
        <input
          type="text"
          name="userPrompt"
          placeholder="Describe your query"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <div className="code-display">
        <div className="buttons">
          <div className="button first"></div>
          <div className="button middle"></div>
          <div className="button last"></div>
        </div>

        <div className="code-output">
        {queryy ? (
          <p>{queryy}</p>
        ) : (
          <p>No SQL query generated yet.</p>
        )}
        </div>
        </div>
        <div className="button-container">
        <button id="get-query" onClick={onSubmit}>Get Query!</button>
        <button id="clear-chat">Clear Chat</button>
      </div>
      </div>
    

  );
}


