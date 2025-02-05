import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin =(email,password )=>{
    if(email === "admin@me.com" && password === 123) {
      console.log("Admin has been logged ")
    }
    else if (email === "user@me.com" && password === 123) {
       console.log( "User has been Arrived")
    }
    else{
      alert("Invalid Credentials")
    }
  }
  handleLogin("user@me.com",123)

  return (
    <>
    {!user ? <Login/> : <h1>User is Logged IN</h1> }
      {/* <EmployeeDashboard/> */} 
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App