import React from 'react';

const ForgetPassword = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center mt-24'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Enter your Email address</span>
                </label>
                <input type="email" placeholder="@gmail.com" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs mt-5">
                <input type="btn" name='btn' placeholder="submit" className="btn btn-accent uppercase text-white input input-bordered w-full max-w-xs" />
            </div>
        </div>
    );
};

export default ForgetPassword;