import React from 'react';
import quote from '../../assets/icons/quote.svg'
const Testimonial = () => {
    return (
        <div className='flex justify-between items-center ml-11 my-14'>
            <div className='flex-auto '>
                <h3 className='text-secondary'>Testimonial</h3>
                <h1 className='text-3xl mt-3'>What Our Patients Says</h1>
            </div>

            <div className='flex-auto ml-96 pl-32'>
                <img className='w-32' src={quote} alt="" />
            </div>
        </div>
    );
};

export default Testimonial;