import React, {useState} from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = () => {
    const [collections, setColletions] = useState(SHOP_DATA);
    return (
        <div>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ) )
        }
            
        </div>
    );
}
export default ShopPage;