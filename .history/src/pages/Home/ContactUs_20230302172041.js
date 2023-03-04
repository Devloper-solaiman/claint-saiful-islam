import React from 'react';
import appointment from '../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <div
            style={{
                background: `url(${appointment})`
            }}
            className="px-10 py-14">
            <div className='text-center pb-14 text-white'>
                <p className='text-1xl font-bold text-secondary text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>Contact Us</p>
                <h4 className='text-4xl '>Stay connected with us</h4>
            </div>
            <div className="grid grid-cols-1 gap-5 form-control w-full max-w-xs">
                <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>
            </div>
        </div>
    );
};

export default ContactUs;