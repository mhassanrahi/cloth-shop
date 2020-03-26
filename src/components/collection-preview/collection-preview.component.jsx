import React from 'react';

import './collection-preview.style.css';
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items}) => {
    return (
        <div>
            <h2 className="border-bottom border-warning">{title.toUpperCase()}</h2>
            <div className="card-deck">
            
                {
                    items.filter((item, index) => index < 4).map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps}/>
                    ))
                }
            </div>
        </div>
    );
}

export default CollectionPreview;