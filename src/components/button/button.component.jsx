import React from 'react';

const Button = ({children, outline, type}) => {
    return (
        <button
        className={`btn btn-outline-${outline} btn-rounded mb-4`}
        type={`${type}`}
      >{children}</button>
    );
}

export default Button;