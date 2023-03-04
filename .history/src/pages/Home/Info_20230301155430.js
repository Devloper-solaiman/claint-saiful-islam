import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-2'>
            <InfoCard img={clock} bgClass="primary"></InfoCard>
            <InfoCard img={marker} bgClass="secondary"></InfoCard>
            <InfoCard img={phone} bgClass="accent"></InfoCard>
        </div>
    );
};

export default Info;