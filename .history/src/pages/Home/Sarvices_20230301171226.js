import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div>
            <div className='text-center my-5'>
                <h1 className='font-bold uppercase text-xl text-primary'>OUR SERVICES</h1>
                <h1 className='text-3xl text-accent'>Services We Provide</h1>
            </div>
            <Service></Service>
        </div>
    );
};

export default Services;