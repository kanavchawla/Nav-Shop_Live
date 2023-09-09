import { createContext, useContext,useEffect,useState } from "react";
export const Auth=createContext();

function AuthContext(props) {
    const [login,setlogin]=useState(false);
  return (
    <Auth.Provider value={{login,setlogin}}>
        {props.children}
    </Auth.Provider>
  )
}

export default AuthContext