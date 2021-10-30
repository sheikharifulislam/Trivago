import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,    
  } from "react-router-dom";
import AddNewService from '../addNewService/AddNewService';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import Login from '../login/Login';
import NavBar from '../navBar/NavBar';
import Register from '../regiser/Register';
import ServiceDetails from '../serviceDetails/ServiceDetails';
import ShippingForm from '../shippingForm/ShippingForm';

const AllRoute = () => {
    return (
        <>
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
                    <Route path="/shipping">
                        <ShippingForm/>    
                    </Route>
                    <Route path="/add-service">
                        <AddNewService/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>                    
                </Switch>
                <Footer/>
            </Router>
        </>
    );
};

export default AllRoute;