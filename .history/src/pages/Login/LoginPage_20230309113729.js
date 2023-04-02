import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const [signInWithGoogle, User, Loading, Error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
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
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h2 className="text-center">Login</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2, 3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.firstName?.type === 'required' && <p className='text-red-600' role="alert">{errors.email.message}</p>}
                            {errors.firstName?.type === 'pattern' && <p className='text-red-600' role="alert">{errors.email.message}</p>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="your password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'password is Required'
                                },
                                pattern: {
                                    value: 6,
                                    message: 'Must be 6 characters or '
                                }
                            })}
                        />
                        <label className="label">
                            {errors.firstName?.type === 'required' && <p className='text-red-600' role="alert">{errors.email.message}</p>}
                            {errors.firstName?.type === 'pattern' && <p className='text-red-600' role="alert">{errors.email.message}</p>}
                        </label>
                    </div>

                    <Link to="/forgetPassword" className=' text-slate-900 label-text'>Forgot Password ?</Link>
                    <div className="form-control w-full max-w-xs">
                        <input type="btn" value="LOGIN" className="input btn btn-accent w-full max-w-xs" />
                    </div>
                    <Link to="/RegisterPage" className='ml-5 text-green-900 label-text'>New to Doctors Portal? </Link>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase">CONTINUE WITH GOOGLE</button>
                </form>
            </div>


        </div>
    );
};

export default LoginPage;