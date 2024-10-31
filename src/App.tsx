import { useContext } from "react";
import { UserContext } from "./useContext/UserContext";

const UserInfo = () => {
    const { user, login, logout } = useContext(UserContext);

    return (
        <div>
            <p>{user ? `Hello ${user.name}` : 'You are not logged in!'}</p>
            <button onClick={user ? logout : login}>
                {user ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default UserInfo;
