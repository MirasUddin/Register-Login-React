import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const Auth = getAuth(app);

const AuthProviders = ({children}) => {
    // const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    const singIn = (email, password)=>{
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const authInfo = {
        // user,
        createUser,
        singIn,

    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;