import React, { Component } from 'react';
import Drcastillo from '../pages/DrcastilloPage';

class Root extends Component {
    render() {
        return <Drcastillo data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;