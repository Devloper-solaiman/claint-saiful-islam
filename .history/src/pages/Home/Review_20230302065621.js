import React from 'react';

const Review = ({ review }) => {
    const { name, location, img } = review
    return (
        <div className="card lg:max-w-lg bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img alt='#' src={img} />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Review;