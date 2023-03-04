import React from 'react';

const Review = ({ review }) => {
    const { name, location, img, details } = review
    return (
        <div className="card lg:max-w-lg bg-primary text-primary-content">
            <div className="card-body">
                <p>{details}</p>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img alt='#' src={img} />
                    </div>
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;