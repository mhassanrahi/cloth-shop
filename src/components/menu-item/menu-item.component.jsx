import React from 'react';

import './menu-item.style.css'
// import './Capture.jpg'
// 
const MenuItem = ({title, imageUrl, size}) => {
    return (
            <div className={`col-md-${size} card menu-item border-primary rounded-0`}
            style={{ 
                backgroundImage: `url( ${imageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'auto',
                }}
                >
                    <h1>{title.toUpperCase()}</h1>
                    <span>
                        <button className="btn btn-warning w-50">SHOP NOW</button>
                    </span>
            </div>
    );
}

export default MenuItem;