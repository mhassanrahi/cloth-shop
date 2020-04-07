import React from 'react';

import './collection-preview.style.css';
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items}) => {
    return (
        <div>
            <h2 className="border-bottom border-warning">{title.toUpperCase()}</h2>
            <div className="card-deck">
            
                {
                    items.filter((item, index) => index < 3).map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    );
}

export default CollectionPreview;