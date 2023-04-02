import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            details: " amet consectetur adipisicing elit. Ullam hic rerum enim veritatis magni. Voluptates asperiores aspernatur voluptate aliquam beatae magnam ullam dicta alias. ",
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            details: '  amet consectetur adipisicing elit. Ullam hic rerum enim veritatis magni. Voluptates asperiores aspernatur voluptate aliquam beatae magnam ullam dicta alias.',
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            details: " amet consectetur adipisicing elit. Ullam hic rerum enim veritatis magni. Voluptates asperiores aspernatur voluptate aliquam beatae magnam ullam dicta alias.",
            location: 'California',
            img: people3
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
                    reviews.map(service => <Review
                        key={service._id}
                        service={service}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;