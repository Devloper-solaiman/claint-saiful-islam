import React from 'react';
import chair from '../../assets/images/chair.png'
import SharedButton from '../Share/SharedButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-32">
                <img src={chair} alt="#" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile <br /> Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat <br /> ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    <SharedButton>Get started</SharedButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;