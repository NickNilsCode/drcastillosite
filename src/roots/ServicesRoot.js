import React, { Component } from 'react';
import Services from '../pages/ServicesPage';

class Root extends Component {
    render() {
        return <Services data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;