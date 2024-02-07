import React from 'react'
import { useState } from 'react'

export const Ftask = () => {
    const [count,setCount] = useState(0);
    const press = ()=> {
        setCount(count+1);
    }
    const pres=()=>{
        setCount(count-1)
    }   
  return (
    <div>
        <center>
            <h1 style={count>=0?{color:"green"}:{color:"pink"}}>{count}</h1>
            <button onClick={press}>click here(+)</button>
            <button onClick={pres}>click here(-)</button>
        </center>
    </div>
  )
}
