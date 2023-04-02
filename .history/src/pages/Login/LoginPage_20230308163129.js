import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const LoginPage = () => {
    const [SignInWithGoogle] = useSignInWithGoogle(auth)
    if (condition) {

    }
    return (
        <div>
            <button onClick={() => SignInWithGoogle()} className="btn">Google</button>
        </div>
    );
};

export default LoginPage;