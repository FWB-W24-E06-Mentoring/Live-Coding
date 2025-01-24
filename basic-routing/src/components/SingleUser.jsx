import React from 'react'
import {  useLocation } from 'react-router-dom'

export default function SingleUser() {
const location = useLocation()
  console.log(location)
  return (
    <div>
      <h1>Single user page</h1>
      <h2>{location?.state?.first_name}</h2>
      <img src={location?.state?.avatar} alt="" />
    </div>
  )
}
