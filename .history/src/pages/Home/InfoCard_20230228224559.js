import React from 'react';

const InfoCard = ({ img }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="clock" /></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;