import React from 'react'
import { useSelector } from 'react-redux';

const MainPage = () => {
  const user = useSelector((state)=>state.login);
  console.log("user from main",user);
  const isLoggedIn = user.status;
  const name = user.name;
  return (
    <div>
      <h1>Main page of {name} </h1>
      <h2>Login:Status - {isLoggedIn.toString()}</h2>
    </div>
  )
}

export default MainPage