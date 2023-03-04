import React, { Children } from 'react';

const SharedButton = ({ children }) => {
    return (
        <div>
            <button class="btn btn-primary bg-gradient-to-tr from-primary to bg-secondary">{children}</button>
        </div>
    );
};

export default SharedButton;