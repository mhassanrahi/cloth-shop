import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component'
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux';
import { createStructuredSelector } from 'reselect';



const Directory = ({sections}) => {
    return (
        <div className="directory row mx-1">
            {
                sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);