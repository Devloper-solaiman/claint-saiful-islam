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
                <p className='text-1xl font-bold text-secondary text-transparent bg-'>Contact Us</p>
                <h4 className='text-4xl '>Stay connected with us</h4>
            </div>

        </div>
    );
};

export default ContactUs;