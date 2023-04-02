import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    return children;
};

export default RequireAuth;