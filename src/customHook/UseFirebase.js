import { getAuth, onAuthStateChanged,signInWithPopup, GoogleAuthProvider,signOut} from "firebase/auth";
import { useEffect,useState } from "react";
import firebaseinitializeAuthentication from '../firebase/firebaseinitialize';

firebaseinitializeAuthentication()
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true); 
    
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)        
    }

    const logOut = () => {     
        return signOut(auth)
       
    }
    
    useEffect(() => {
        const unsubscribed =  onAuthStateChanged(auth, (user) => {
             if(user) {
                 setUser(user);              
             }
             else {
                 setUser({});      
             }
 
             setIsLoading(false);
         })
 
         return () => unsubscribed;
 
     }, [])

     
    return {       
        logOut,
        signInUsingGoogle,
        user,
        isLoading,        
        setIsLoading
    }
};

export default UseFirebase;