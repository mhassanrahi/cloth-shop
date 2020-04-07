import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/'
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.style.css'
const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
        <div className="collection-page">
        
        <h2 className="border-bottom border-warning text-center">{title.toUpperCase()}</h2>
            
                <div className="items row mx-1">
                {/* <div className="card-deck"> */}
                {
                    items.map(item =>
                    <CollectionItem key={item.id} item={item} />
                    )
                }
                {/* </div> */}
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps) (CollectionPage);
