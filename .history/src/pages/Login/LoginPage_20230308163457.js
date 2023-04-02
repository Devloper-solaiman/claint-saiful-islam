import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const LoginPage = () => {
    const [signInWithGoogle, User, Loading, Error] = useSignInWithGoogle(auth);
    if (Loading) {
        return <p>Loading.....</p>
    }
    if (Error) {

    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className="btn">Google</button>
        </div>
    );
};

export default LoginPage;