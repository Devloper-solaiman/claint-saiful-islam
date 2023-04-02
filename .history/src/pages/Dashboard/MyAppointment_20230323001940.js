import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    // const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
        // if (user) {
        //     fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        //         method: 'GET',
        //         headers: {
        //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        //         }
        //     })
        //         .then(res => {
        //             console.log('res', res);
        //             if (res.status === 401 || res.status === 403) {
        //                 signOut(auth);
        //                 localStorage.removeItem('accessToken');
        //                 navigate('/');
        //             }
        //             return res.json()
        //         })
        //         .then(data => setAppointments(data));
        // }
    }, [user])

    return (
        <div>
            <h2 className='font-bold text-accent'> Patient Name = {user.displayName} </h2>
            <h2 className='mb-5'>total Appointments: <span className='text-red-500 font-bold'> {appointments.length}</span> </h2>
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
                            appointments.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.treatment}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>

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