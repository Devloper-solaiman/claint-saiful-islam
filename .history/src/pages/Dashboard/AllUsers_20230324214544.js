import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';
import AllUserRow from './AllUserRow';

const AllUsers = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-auto">
            <table className="table table-zebra w-full">
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
                        users.map(user => <AllUserRow
                            key={user._id}
                            user={user}
                        ></AllUserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;