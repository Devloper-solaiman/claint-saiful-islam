import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from 'react-router';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default RequireAuth;