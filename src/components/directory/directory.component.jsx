import React, {useState} from 'react';
import MenuItem from '../../components/menu-item/menu-item.component'

import hat from '../../images/menu/hat.svg';
import jacket from '../../images/menu/jacket.jpg';
import sneaker from '../../images/menu/sneaker.jpg';
import man from '../../images/menu/man.jpg';
import woman from '../../images/menu/woman.jpg';

const Directory = () => {
    const [sections, setSections] = useState([
        {
            title: 'hats',
            id: 1,
            imageUrl: `${hat}`,
            size: 4,
        },
        {
            title: 'jackets',
            id: 2,
            imageUrl: `${jacket}`,
            size: 4,
        },
        {
            title: 'sneakers',
            id: 3,
            imageUrl: `${sneaker}`,
            size: 4,
        },
        {
            title: 'men\'s',
            id: 4,
            imageUrl: `${man}`,
            size: 6,
        },
        {
            title: 'women\'s',
            id: 5,
            imageUrl: `${woman}`,
            size: 6,
        }
    ]);
    return (
        <div className="directory row">
            {
                sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    );
}

export default Directory;