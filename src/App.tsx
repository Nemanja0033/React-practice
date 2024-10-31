import React, { useContext } from 'react'
import {UserContext, UserProvider} from './useContext/UserContext'

const UserInfo = () => {
  const {user, login, logout} = useContext(UserContext);
  return (
    <div>
        <p>{user ? `Hello, ${user.name}` : "Niste prijavljeni"}</p>
        <button onClick={user ? logout : login}>
            {user ? "Logout" : "Login"}
        </button>
    </div>
);  
}

const App = () => {
  return (
    <UserProvider>
      <UserInfo />
    </UserProvider>
  )
}

export default App