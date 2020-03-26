import React from 'react';

import './collection-item.style.css';

const CollectionItem = ({id, name, price, imageUrl}) => 
     (
           <div className="card mb-5">
                <div className="card-header text-center">
                        <p className="card-text font-weight-bold">{name}</p>
                </div>
                <img className="card-img" src={`${imageUrl}`} alt={`${name}`} />

                <div className="card-footer input-group">
                    <button className="btn btn-secondary w-75 mx-auto">Add to cart</button>
                    <h5 className="card-text font-weight-bold text-danger pt-3">${price}</h5>
                </div>
            </div>
    );

export default CollectionItem;