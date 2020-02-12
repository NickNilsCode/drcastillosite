import React, { Component } from 'react';
import Gallery from '../pages/GalleryPage';

class Root extends Component {
    render() {
        return <Gallery data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;