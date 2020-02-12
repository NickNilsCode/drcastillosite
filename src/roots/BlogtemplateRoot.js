import React, { Component } from 'react';
import Blogtemplate from '../pages/BlogtemplatePage';

class Root extends Component {
    render() {
        return <Blogtemplate data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;