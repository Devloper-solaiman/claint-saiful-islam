import React, { Children } from 'react';

const SharedButton = ({ children }) => {
    return (
        <div>
            <button class="btn btn-primary">{children}</button>
        </div>
    );
};

export default SharedButton;