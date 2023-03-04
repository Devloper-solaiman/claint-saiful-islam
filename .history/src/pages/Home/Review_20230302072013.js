import React from 'react';

const Review = ({ review }) => {
    const { name, location, img, details } = review
    return (
        <div className="card lg:max-w-lg text-primary-content">
            <div className="card-body">
                <p className='text-justify'>{details}</p>
                <div className='flex '>
                    <div className="avatar items-center justify-center">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='#' src={img} />
                        </div>
                    </div>
                    <div className='justify-center items-center ml-5'>
                        <h3 className='text-accent text-3xl'>{name}</h3>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;