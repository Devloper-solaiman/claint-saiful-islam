import React, { useState, useEffect } from 'react';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/booking`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>index</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;