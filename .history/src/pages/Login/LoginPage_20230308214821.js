import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { Link } from "react-router-dom";

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
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="Email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <Link>Forgot Password</Link>
                    <div className="form-control w-full max-w-xs">
                        <input type="btn" value="LOGIN" className="input btn btn-accent w-full max-w-xs" />
                    </div>
                    <Link to="/RegisterPage" className='ml-5 text-green-900 label-text'>New to Doctors Portal? </Link>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase">CONTINUE WITH GOOGLE</button>
                </div>
            </div>


        </div>
    );
};

export default LoginPage;