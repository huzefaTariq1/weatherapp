import { useContext } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,

} from "firebase/auth"

import {auth} from '../firebase'
import { useEffect } from "react";
import { useState } from "react";

const userAuthContex=createContext();



export function UserAuthContexProvider({children}){

    const [user,setUser]=useState("");

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function Login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout(){
        return signOut(auth)
    }

    function googleSignIn(){
        const googleAuthProvider= new GoogleAuthProvider()
        return signInWithPopup(auth,googleAuthProvider)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(createUser)=>{
             setUser(createUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

  

return (
    <userAuthContex.Provider value={{auth,signUp,Login,googleSignIn,logout}}>
        {children}
    </userAuthContex.Provider>
)

}

export function useUserAuth(){
    return useContext(userAuthContex)
}