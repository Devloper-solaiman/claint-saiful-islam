import React from 'react';
import quote from '../../assets/icons/quote.svg'
const Testimonial = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex-1'>
                <h3 className='text-secondary'>Testimonial</h3>
                <h1 className='text-3xl'>What Our Patients Says</h1>
            </div>
            <div className='flex-1'>
                <img className='w-32' src={quote} alt="" />
            </div>
        </div>
    );
};

export default Testimonial;