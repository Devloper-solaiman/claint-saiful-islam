import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from "./../Share/Loading";
import { useQuery } from "react-query";

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP');
    const { isLoading, refetch, data: services } = useQuery(['repoData', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-secondary font-bold text-1xl text-center'>Available Appointment : {format(date, 'PP')} </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}

                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                setTreatment={setTreatment}
                treatment={treatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;