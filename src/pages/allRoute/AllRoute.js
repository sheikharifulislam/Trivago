import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,    
  } from "react-router-dom";
import AuthProvider from '../../context/AuthProvider';
import AddNewService from '../addNewService/AddNewService';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import Login from '../login/Login';
import NavBar from '../navBar/NavBar';
import ServiceDetails from '../serviceDetails/ServiceDetails';
import ShippingForm from '../shippingForm/ShippingForm';
import PrivateRoute from '../../privateRoute/PrivateRoute';
import Acount from '../acount/Acount';
import NotFound from '../../pages/notFound/NotFound';

const AllRoute = () => {
    return (
        <>
           <AuthProvider>
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/home">
                            <Home/>
                        </Route>
                        <Route path="/service-details/:serviceId">
                            <ServiceDetails/>
                        </Route>
                        <PrivateRoute path="/shipping">
                            <ShippingForm/>    
                        </PrivateRoute>
                        <PrivateRoute path="/add-service">
                            <AddNewService/>
                        </PrivateRoute>
                        <PrivateRoute path="/acount">
                            <Acount/>
                        </PrivateRoute>                      
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route path="*">
                            <NotFound/>
                        </Route>                    
                    </Switch>
                    <Footer/>
                </Router>
           </AuthProvider>
        </>
    );
};

export default AllRoute;