import React from 'react';
import { useQuery } from 'react-query';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    return (
        <div>
            <div className="text-2xl"> Manage doctor{doctors.length} </div>
        </div>
    );
};

export default ManageDoctors;