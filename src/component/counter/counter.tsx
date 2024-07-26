import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount]=useState(0)
  return (
    <div className="container">
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
