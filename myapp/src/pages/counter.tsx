import React, { useState } from 'react'

export default function home() {
     const [counter,setcounter] = useState<number>(0) 
     const inc = () =>{
        setcounter(counter+1)
     }
     const dec = () =>{
        setcounter(counter-1)
     }
  return (
    <div className='text-3xl text-center bg-white'>
        <p>{counter}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}
