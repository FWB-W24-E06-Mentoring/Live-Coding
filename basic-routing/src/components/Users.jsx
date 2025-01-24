import { useEffect, useState } from "react"
import { NavLink, Outlet } from "react-router-dom"


export default function Users() {

  const [users, setUsers]=useState([])

  useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2")
    .then(res=>res.json())
    .then(result=> setUsers(result.data))
  },[])

  return (
    <div>
    
      <h1>This is Users page</h1>
          
      <div>
        {users.map(user=>(
          <li>
            <NavLink to={`/users/${user.id}`} state={user} >{user.first_name} </NavLink>
            </li>
          ))}
      
      </div>
      
        <Outlet/>
    </div>
  )
}
