import {createContext, useState} from "react";

export const UserContext = createContext();

const UserContextWrapper = ({children}) => {

    const [username, setUsername] = useState("Stanley");
    return (
        <UserContext.Provider value={{username, setUsername}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextWrapper;