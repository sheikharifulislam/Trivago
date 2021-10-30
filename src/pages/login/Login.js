import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="login-form-section">
            <div className="login-form-container">
                <h2>Pleace Login</h2>
               <div className="login-form">
                    <form action="">
                        <div className="form-design">
                            <input type="email" placeholder="Enter Your Email" required/>
                        </div>
                        <div className="form-design">
                            <input type="password" placeholder="Enter Your Password" required/>
                        </div>
                        <div className="form-design">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
               </div>
            </div>
        </div>
    );
};

export default Login;