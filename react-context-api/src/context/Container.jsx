import React,{useState} from 'react'
import { MyContext } from './context'


export default function ProviderContainer({children}) {
    const [counter, setCounter] =useState(0)
    
  return (
    <MyContext.Provider value={{counter, setCounter}}>
        {children}
    </MyContext.Provider>
  )
}



