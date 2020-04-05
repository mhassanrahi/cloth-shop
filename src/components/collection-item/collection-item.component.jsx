import React from 'react';
import { connect } from 'react-redux';

import './collection-item.style.css';
import { addItem } from '../../redux';


const CollectionItem = ({item, addItem}) => 
     {
         const {name, price, imageUrl} = item;
         return (
           <div className="card mb-5">
                <div className="card-header text-center">
                        <p className="card-text font-weight-bold">{name}</p>
                </div>
                <img className="card-img" src={`${imageUrl}`} alt={`${name}`} />

                <div className="card-footer input-group">
                    <button onClick={() => addItem(item)} className="btn btn-secondary w-75 mx-auto">Add to cart</button>
                    <h5 className="card-text font-weight-bold text-danger pt-3">${price}</h5>
                </div>
            </div>
    )};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);