import React, { Component } from 'react';
import Gallerytemplate from '../pages/GallerytemplatePage';

class Root extends Component {
    render() {
        return <Gallerytemplate data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;