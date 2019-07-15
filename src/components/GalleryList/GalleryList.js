import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {


    render () {
        return (
            <>
            {this.props.goatList.map((item) =>
            <GalleryItem getGoats={this.props.getGoats} item={item} key={item.id}/>                  
                      )}
            </>
        );
    }
}

export default GalleryList;