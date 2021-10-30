import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseinitializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default firebaseinitializeAuthentication;