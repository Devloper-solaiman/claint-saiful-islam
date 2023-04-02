import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';

const AllUsers = () => {
    const { data: users, isLoading } = useQuery(() => fetch('http://localhost:5000/user').then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='text-5xl'>
            <h3>All users {users.length} </h3>
            <h3>All users</h3>
            <h3>All users</h3>
            <h3>All users</h3>
            <h3>All users</h3>
        </div>
    );
};

export default AllUsers;