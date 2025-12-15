import {useState, useContext, createContext} from 'react'

const AuthContext= createContext();

const AuthProvider = ({children}) => {
    const[isLoggedIn, setIsLoggedin]= useState(
        !!localStorage.getItem('accessToken')
    )
    

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedin}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};