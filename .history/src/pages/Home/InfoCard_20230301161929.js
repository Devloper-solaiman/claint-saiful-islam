import React from 'react';

const InfoCard = ({ img, bgClass, cardTitle }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgClass}`}>
            <figure><img src={img} alt="clock" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;