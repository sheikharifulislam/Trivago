import React from 'react';
import './register.css';

const Register = () => {
    return (
        <div className="register-form-section">
            <div className="regiser-form-container">
                <h2>Pleace Register</h2>
               <div className="register-form">
                    <form action="">
                        <div className="form-design">
                            <input type="text" placeholder="Enter Your Name" required/>
                        </div>
                        <div className="form-design">
                            <input type="email" placeholder="Enter Your E-Mail Address" required />
                        </div>
                        <div className="form-design">
                            <input type="tel" placeholder="Enter Your Mobile Number" required/>
                        </div>
                        <div className="form-design">
                            <input type="password" placeholder="Enter Your Password" required/>
                        </div>
                        <div className="form-design">
                            <input type="password" placeholder="Confirm Your Password" required/>
                        </div>
                        <div className="form-design">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
               </div>
            </div>
        </div>
    );
};

export default Register;