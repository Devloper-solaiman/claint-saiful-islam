import React from 'react';
import { Link } from "react-router-dom";
import auth from "./../../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const LoginPage = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        return (
            <div>
                console.log(user);
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }
    return (
        <div className='grid grid-cols-1 justify-items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl">Login</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="E-mail" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text ">Password</span>

                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <Link to='/forgetPassword' className="label-text-alt text-green-700">Forget Password ?</Link>
                        </label>
                        <div className="form-control w-full max-w-xs">

                            <input type="btn" placeholder="login" className="btn btn-accent text-white mt-4 input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex flex-col w-72 border-opacity-50">
                        <Link to='/RegisterPage' className="label-text-alt mt-3 ml-5 text-green-700">New to D.saiful islam ?</Link>
                        <div className="divider">OR</div>
                    </div>
                    <input type="btn" name='btn' onClick={() => signInWithGoogle()} placeholder="CONTINUE WITH GOOGLE" className="btn btn-white text-accent input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;