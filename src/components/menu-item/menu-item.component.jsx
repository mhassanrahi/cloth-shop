import React from 'react';
import { withRouter } from 'react-router-dom'

import './menu-item.style.css'
// import './Capture.jpg'
// 
const MenuItem = ({title, imageUrl, size, history, match}) => {
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
                        <button className="btn btn-secondary w-50" onClick={()=> history.push(`${match.url}${title}`)}>SHOP NOW</button>
                    </span>
            </div>
    );
}

export default withRouter(MenuItem);