import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const LoginPage = () => {
    const [SignInWithGoogle] = useSignInWithGoogle
    return (
        <div>
            <button className="btn">Google</button>
        </div>
    );
};

export default LoginPage;