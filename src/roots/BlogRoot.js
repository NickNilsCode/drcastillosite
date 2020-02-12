import React, { Component } from 'react';
import Blog from '../pages/BlogPage';

class Root extends Component {
    render() {
        return <Blog data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;