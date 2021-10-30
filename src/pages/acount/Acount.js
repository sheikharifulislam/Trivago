import React from 'react';
import UseAuth from '../../customHook/UseAuth';

const Acount = () => {

    const {user} = UseAuth();
   
    const styleAcountInto = {
        textAlign: 'center',
        marginTop: '50px'
    }

    return (
        <div className="acount-into" style={styleAcountInto}>
            <p>{user.displayName}</p>
            <small>{user.email}</small>
        </div>
    );
};

export default Acount;