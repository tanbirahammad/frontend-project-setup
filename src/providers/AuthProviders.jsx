import { signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState } from "react";
import { auth } from '../config/firebase.config'

export const AuthContext = createContext();


const AuthProviders = ({ children }) => {
    const [user, setUSer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUSer(currentUser)
            setIsLoading(false)
        });
        return () => {
            return subscribe;
        }
    }, [])

    const values = {
        user,
        createUser,
        login,
        isLoading,
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;