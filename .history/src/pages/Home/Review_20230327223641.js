import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ review }) => {
    const { name, location, img, details } = review
    return (
        <div className="card my-10 lg:max-w-lg text-primary-content">
            <Link className="card-body">
                <p className='text-justify'>{details}</p>
                <div className='flex  mt-5'>
                    <div className="avatar items-center justify-center">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='#' src={img} />
                        </div>
                    </div>
                    <div className='justify-center items-center ml-5'>
                        <h3 className='text-accent text-xl font-bold'>{name}</h3>
                        <p>{location}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Review;