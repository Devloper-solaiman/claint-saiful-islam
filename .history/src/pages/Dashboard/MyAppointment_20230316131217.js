import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "./../../firebase.init";

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?Patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user])
    return (
        <div>
            <h2 className='font-bold text-accent'> Patient Name = {user.displayName} </h2>
            <h2>total Appointments: <span className='text-red-500'> {appointments.length}</span> </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            appointments.map(a =>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>

                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;