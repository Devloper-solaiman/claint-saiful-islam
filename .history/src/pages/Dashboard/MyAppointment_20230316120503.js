import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "./../../firebase.init";

const MyAppointment = () => {
    const [appointment, stAppointment] = useState;
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAo)
        }
    }, [user])
    return (
        <div>
            <h1 className='text-xl font-bold text-accent mb-3'>MyAppointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <button className='btn btn-primary btn-sm mt-3'>Pay</button>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;