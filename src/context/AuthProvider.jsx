import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../services/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const creatRegisterUser = (email, pass) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, pass)
     
    }

    const loginUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const signOutUser = () => {
        setLoading(true)
       return signOut(auth)
      
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])
    const authInfo = {
        user,
        creatRegisterUser,
        loginUser,
        signOutUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;