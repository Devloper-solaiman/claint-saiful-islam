import React from 'react';
import quote from '../../assets/icons/quote.svg'
const Testimonial = () => {
    const Review = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California'
        },
    ]
    return (
        <section>
            <div className='flex justify-between '>
                <div className=''>
                    <h3 className='text-secondary'>Testimonial</h3>
                    <h1 className='text-3xl mt-3'>What Our Patients Says</h1>
                </div>

                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonial;