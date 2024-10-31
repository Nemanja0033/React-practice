import { useContext } from "react"
import { UserContext, UserProvider } from "./useContext/UserContext"

const UserInfo = () => {
  const {user, login, logout}:any = useContext(UserContext)

  return(
    <div>
      <p>{user ? `Hello ${user.name}` : 'You are not logged in!'}</p>
      <button onClick={user ? logout : login}>{user ? 'Logout' : 'Login'}</button>
    </div>
  )
}

const App = () => {
  return (
    <UserProvider>
      <UserInfo />
    </UserProvider>
  )
}

export default App