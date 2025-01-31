import React, { useContext } from 'react'
import { MyContext } from './context/context'

export default function GrandChildB() {
  const {setCounter}=useContext(MyContext)
  return (
    <div>
      <h2>This is grandchild B component</h2>
      <button onClick={()=>setCounter(prev=>prev+1)}>increment counter</button>
    </div>
  )
}
