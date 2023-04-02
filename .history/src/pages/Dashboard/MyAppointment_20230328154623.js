import React, { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import Loading from '../Share/Loading';
import auth from "./../../firebase.init";


const MyAppointment = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const { isLoading } = useQuery(['repoData', user], () =>
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })

            .then(res => {
                console.log('res', res);
                if (isLoading) {
                    return <Loading></Loading>
                }
                if (res.status === 401 || res.status === 403) {
                    navigate('/')
                }

                return res.json()
            })
    )



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