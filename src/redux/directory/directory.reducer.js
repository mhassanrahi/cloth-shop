import hat from '../../images/menu/hat.svg';
import jacket from '../../images/menu/jacket.jpg';
import sneaker from '../../images/menu/sneaker.jpg';
import man from '../../images/menu/man.jpg';
import woman from '../../images/menu/woman.jpg';
const initialState = {
    sections: [
        {
            title: 'hats',
            id: 1,
            imageUrl: `${hat}`,
            size: 4,
            linkUrl: 'shop/hats'
        },
        {
            title: 'sneakers',
            id: 2,
            imageUrl: `${sneaker}`,
            size: 4,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'jackets',
            id: 3,
            imageUrl: `${jacket}`,
            size: 4,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'men',
            id: 4,
            imageUrl: `${man}`,
            size: 6,
            linkUrl: 'shop/men'
        },
        {
            title: 'women',
            id: 5,
            imageUrl: `${woman}`,
            size: 6,
            linkUrl: 'shop/women'
        }
    ]
};


const directoryReducer = (state= initialState, action) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;