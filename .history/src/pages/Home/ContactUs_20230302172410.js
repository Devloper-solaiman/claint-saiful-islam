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
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
            </div>
        </div>
    );
};

export default ContactUs;