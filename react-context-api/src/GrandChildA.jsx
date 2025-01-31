import React, { useContext } from 'react'
import { MyContext } from './context/context'

export default function GrandChildA() {
  //using context 
    const {counter}  =useContext(MyContext)
  return (
    <div>
      <h2>This is grandchild A component: {counter}</h2>
    </div>
  )
}
