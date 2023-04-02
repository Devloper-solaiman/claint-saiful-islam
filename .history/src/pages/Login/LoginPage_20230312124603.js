import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from '../Share/Loading';

const LoginPage = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (googleLoading || loading) {
        return <Loading></Loading>
    }
    let errorMassage;
    const navigate = useNavigate();
    const location = useLocation();
lot from

    if (googleError || error) {
        errorMassage = <p className='text-red-600'>{googleError?.message || error?.message}</p>
    }
    if (googleUser || user) {
        console.log(googleUser, user);
    }
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div className='grid grid-cols-1 justify-items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h2 className="text-center">Login</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                    <Link to="/forgetPassword" className=' text-slate-900 label-text'>Forgot Password ?</Link>
                    <div className="form-control w-full max-w-xs">
                        {errorMassage}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </div>

                    <Link to="/RegisterPage" className='ml-5 text-green-900 label-text'>New to Doctor saiful islam? </Link>
                </form>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase">CONTINUE WITH GOOGLE</button>
            </div>


        </div>
    );
};

export default LoginPage;