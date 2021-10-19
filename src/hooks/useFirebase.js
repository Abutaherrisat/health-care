import { useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword,  signOut,onAuthStateChanged  } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init";
import { useEffect } from "react/cjs/react.development";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [enterPassword , setEnterPassword] = useState('')
    const [error, setError] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin,setIsLogin] = useState(false)
   

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email + " " + password);
        if (password.length < 6) {
          setError('password must be at least 6 character') 
          return
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password);
      }
      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user
            console.log(user);
            setError('')
          })
          .catch(error => {
            setError(error.message)
          })
    
      }
      const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user
            console.log(user);
            setError('')
          })
          .catch(error => {
            setError(error.message)
          })
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
      const handlePassWordChange = e => {
        setPassword(e.target.value);
      }
      const toggleLogIn = e => {
        setIsLogin(e.target.checked);
    
      }
      const handleSetPassword = e => {
        setEnterPassword(e.target.value);
      }

    

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() =>{
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
        })
    },[])


    return {
        user,
        error,
        isLogin,
        enterPassword,
        signInUsingGoogle,
        handleEmailChange,
        handlePassWordChange,
        setEnterPassword,
        handleRegistration,
        toggleLogIn,

       
        logout
    }
}

export default useFirebase;