import React, { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (email) {
            fetch(``)
        }
    }, [user])
    return (
        <div>

        </div>
    );
};

export default useToken;