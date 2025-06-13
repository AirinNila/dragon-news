import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../services/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const creatRegisterUser = (email, pass) => {
       return createUserWithEmailAndPassword(auth, email, pass)
     
    }

    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
        })
        return () => {
            unSubscribe()
        }
    },[])
    const authInfo = {
        user,
        creatRegisterUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;