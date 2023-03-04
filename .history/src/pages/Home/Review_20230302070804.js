import React from 'react';

const Review = ({ review }) => {
    const { name, location, img, details } = review
    return (
        <div className="card lg:max-w-lg bg-primary text-primary-content">
            <div className="card-body">
                <p>{details}</p>
                <div className='flex '>
                    <div className="avatar flex-1">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='#' src={img} />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h3>{name}</h3>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;