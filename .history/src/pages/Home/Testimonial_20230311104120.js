import React from 'react';
import quote from '../../assets/icons/quote.svg'
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
        <section className='my-28'>
            <div className='flex justify-between '>
                <div className='-mt-16'>
                    <h3 className='text-secondary ml-24 text-xl'>Testimonial</h3>
                    <h1 className='text-3xl ml-24 '>What Our Patients Says</h1>
                </div>

                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;