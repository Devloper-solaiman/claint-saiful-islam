import React from 'react';

const InfoCard = ({ img, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-500 shadow-xl ${bgClass}`}>
            <figure><img src={img} alt="clock" /></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;