import React from 'react';
import { Link } from "react-router-dom";

const LoginPage = () => {
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
                        <div className="form-control w-full max-w-xs">
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
                            <div className="divider">OR</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;