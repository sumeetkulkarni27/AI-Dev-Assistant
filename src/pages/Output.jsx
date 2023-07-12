import React from 'react'
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";


const Output =()=> {
  return (
<div>
    <p className='resolve output'>Sample Outputs</p>
    <div className='image-container'>

    <img src={e} alt='something'/>
    <img src={f} alt='something'/>

    <img src={c} alt='something'/>
    <img src={d} alt='something'/>
   
    <img src={a} alt='something'/>
    <img src={b} alt='something'/>
    </div>

    </div>
  )
}

export default Output