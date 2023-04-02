import React from 'react';
import Review from './Review';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Testimonial = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto?',
            img: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto?',
            img: cavity,
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto?',
            img: whitening,
        },
    ]
    return (
        <div>
            <div className='text-center my-14'>
                <h1 className='font-bold uppercase text-xl text-primary'>OUR SERVICES</h1>
                <h1 className='text-3xl text-accent font-bold'>Services We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10'>
                {
                    services.map(service => <Review
                        key={service._id}
                        service={service}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;