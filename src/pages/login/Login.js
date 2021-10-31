import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UseFirebase from '../../customHook/UseFirebase';
import './login.css';

const Login = () => {

    const {setIsLoading,signInUsingGoogle} = UseFirebase()

    
    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/home';

    const handelGoogleLogin = () => {
        signInUsingGoogle()
        .then((result) => {
            history.push(redirectUrl);
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => setIsLoading(false))
    }

    return (
        <div className="login-form-section">
            <div className="login-form-container">
                <h2>Pleace Login</h2>
                <button onClick={handelGoogleLogin}>Google Login</button>
            </div>
        </div>
    );
};

export default Login;