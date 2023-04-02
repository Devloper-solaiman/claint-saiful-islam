import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";



const LoginPage = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if (gLoading) {
        return <p>Loading....</p>
    }
    return (
        <div >
            <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
        </div >
    );
};

export default LoginPage;