import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';

function RegisterPage() {
    const [signInWithGoogle, User, Loading, Error] = useSignInWithGoogle(auth);
    if (Loading) {
        return <p>Loading.....</p>
    }
    return (
        <div className='grid grid-cols-1 justify-items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl">Sign Up</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name='name' placeholder="Your Full Name" className="input input-bordered w-full max-w-xs" />
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

                            <input type="btn" value="sing Up" className="btn btn-accent uppercase text-white mt-4 input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex flex-col w-72 border-opacity-50">
                        <Link to='/loginPage' className="label-text mt-3 ml-5 text-green-700">already have an account ? <span className='text-secondary'> login here</span></Link>
                        <div className="divider">OR</div>
                    </div>
                    <input type="btn" name='btn' placeholder="CONTINUE WITH GOOGLE" className="btn btn-white text-accent input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
