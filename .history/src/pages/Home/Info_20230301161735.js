import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-2'>
            <InfoCard cardTitle="opening Hours" img={clock} bgClass="bg-primary"></InfoCard>
            <InfoCard cardTitle="" img={marker} bgClass="bg-accent"></InfoCard>
            <InfoCard cardTitle="" img={phone} bgClass="bg-secondary"></InfoCard>
        </div>
    );
};

export default Info;