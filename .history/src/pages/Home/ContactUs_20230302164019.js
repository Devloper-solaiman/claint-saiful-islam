import React from 'react';
import appointment from '../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <div
            style={{
                background: `url(${appointment})`
            }}
            className="bg-primary px-10 py-14">
            <div className='text-center pb-14 text-white'>
                <p className='text-1xl font-bold text-secondary text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>Contact Us</p>
                <h4 className='text-4xl '>Stay connected with us</h4>
            </div>
            <div className="form-control w-full  max-w-xs">
                <label className="label">
                    <span className="label-text text-white">What is your name?</span>

                </label>
                <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />

                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
            </div>
        </div>
    );
};

export default ContactUs;