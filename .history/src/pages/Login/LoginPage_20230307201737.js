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
                                <Link className="label-text-alt">Forget Password ?</Link>
                            </label>
                            <div className="form-control w-full max-w-xs">

                                <input type="btn" placeholder="login" className="btn btn-accent text-white input input-bordered w-full max-w-xs" />

                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;