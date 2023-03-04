import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:gridcl3'>
            <InfoCard img={clock} ></InfoCard>
            <InfoCard img={clock} ></InfoCard>
            <InfoCard img={clock} ></InfoCard>
        </div>
    );
};

export default Info;