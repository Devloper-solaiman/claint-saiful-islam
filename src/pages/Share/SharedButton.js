import React from 'react';

const SharedButton = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">
            {children}
        </button>
    );
};

export default SharedButton;