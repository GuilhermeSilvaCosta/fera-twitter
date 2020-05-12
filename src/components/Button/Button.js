import React from 'react';

import './Button.css'

function Button({ children, ...props }) {

    return (
        <div className="button-container">
            <button {...props}>
                {children}
            </button>
        </div>
    )
}

export default Button;