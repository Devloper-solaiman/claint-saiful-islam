import React from 'react';
import quote from '../../assets/icons/quote.svg'
const Testimonial = () => {
    return (
        <div className='flex'>
            <div>
                <h3 className='text-secondary'>Testimonial</h3>
                <h1 className='text-3xl'>What Our Patients Says</h1>
            </div>
            <div>
                <img src={quote} alt="" />
            </div>
        </div>
    );
};

export default Testimonial;