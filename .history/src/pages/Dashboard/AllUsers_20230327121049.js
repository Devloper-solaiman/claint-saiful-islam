import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';
import AllUserRow from "./AllUserRow";

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th> No</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <AllUserRow
                            key={user._id}
                            refetch={refetch}
                            user={user}
                            index={index}
                        ></AllUserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;