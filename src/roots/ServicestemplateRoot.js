import React, { Component } from 'react';
import Servicestemplate from '../pages/ServicestemplatePage';

class Root extends Component {
    render() {
        return <Servicestemplate data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;