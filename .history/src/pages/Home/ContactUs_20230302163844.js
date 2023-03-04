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
            <div className="form-control w-full text-white max-w-xs">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                    <span className="label-text-alt">Top Right label</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text-alt">Bottom Left label</span>
                    <span className="label-text-alt">Bottom Right label</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
            </div>
        </div>
    );
};

export default ContactUs;