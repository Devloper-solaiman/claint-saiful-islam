import React from 'react';
import auth from "./../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";



const LoginPage = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if (gLoading) {
        return <p>Loading....</p>
    }
    return (
        <div >
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline"
            >Continue with Google</button>
        </div >
    );
};

export default LoginPage;