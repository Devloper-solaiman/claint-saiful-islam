import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const LoginPage = () => {
    const [signInWithGoogle, User, Loading, Error] = useSignInWithGoogle(auth);
    if (Loading) {
        return <p>Loading.....</p>
    }
    if (Error) {
        console.log(Error?.message);
    }
    if (User) {
        console.log(User);
    }
    return (
        <div className='grid grid-cols-1 justify-items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center">Login</h2>
                    <div className="divider">OR</div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <button onClick={() => signInWithGoogle()} className="btn">Google</button>
        </div>
    );
};

export default LoginPage;