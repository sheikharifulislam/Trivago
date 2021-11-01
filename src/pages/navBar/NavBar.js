import React,{useState} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../customHook/UseAuth';
import logo from '../../images/logo.png';
import './navBar.css';

const NavBar = () => {

    const history = useHistory();
    const [userInfoDisplay, setUserInfoDisplay] = useState(false);    
    const [mobileMenuDisplay, setMobileMenuDisplay] = useState('block');
   
    const pushAcount = () => {
        history.push('/acount');
    }

    const {setIsLoading,logOut,user} = useAuth();
   

    const signOut = () => {
        setIsLoading(true);
        logOut()
        .then((result) => {
            user({});
            history.push('/home');
        })
        .catch((error) => console.log(error.message))
        .finally(() => setIsLoading(false));
    }

    

    const handelMobileMenu = () => {
        if(mobileMenuDisplay === 'none') {
            setMobileMenuDisplay('block');
        }
        else {
            setMobileMenuDisplay('none');
        }
    } 

    const styleMobileMenuDisplay = {
        display: mobileMenuDisplay,
    }

    return(
        <div className="header-top">
            <div className="container">
                <div className="header-top-container">
                    <div className="logo">
                        <img src={logo} alt="Lab Logo" />
                    </div>
                    <div className="menu" style={styleMobileMenuDisplay}>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/home">home</NavLink>
                                </li>
                                {
                                    user.email &&
                                    <li>
                                        <NavLink to="/my-orders">My Orders</NavLink>
                                    </li>
                                }
                                {
                                    user.email &&
                                    <li>
                                        <NavLink to="/manage-all-orders">Manage All Orders</NavLink>
                                    </li>
                                }
                                {
                                    user.email &&
                                    <li>
                                        <NavLink to="/add-service">Add Service</NavLink>
                                    </li>
                                }                                
                                {
                                    !user.email &&
                                    <li>
                                        <NavLink to="/login">Login</NavLink>
                                    </li>
                                }
                                <li>
                                    <span className="user-icon" onClick={() => setUserInfoDisplay(!userInfoDisplay)}><i className="fas fa-user"></i></span>
                                    <div className="user-information" style={{display: userInfoDisplay ? 'block' : 'none'}}>
                                        <ul>
                                            <li onClick={pushAcount}>Acount</li>
                                            <li onClick={signOut}>log Out</li>
                                        </ul>
                                    </div>                               
                                </li>                             
                            </ul>                          
                        </nav>
                    </div>
                    <div className="response-menu-bar">
                        <li>
                            <span><i className="fas fa-bars" onClick={handelMobileMenu}></i></span>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NavBar;