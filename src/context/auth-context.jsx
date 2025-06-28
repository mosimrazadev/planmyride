import { createContext, useState, useContext } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {

    const [authModal, setAuthModal] = useState("login");
    const [users, setUsers] = useState([]);
    const [ currentUser, setCurrentUser] = useState(null)

  return (
     <authContext.Provider value ={{authModal, setAuthModal, users, setUsers, currentUser, setCurrentUser}}>
        {children}
     </authContext.Provider>
  )
}

export default AuthProvider;