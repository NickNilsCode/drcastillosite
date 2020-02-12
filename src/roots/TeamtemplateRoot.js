import React, { Component } from 'react';
import Teamtemplate from '../pages/TeamtemplatePage';

class Root extends Component {
    render() {
        return <Teamtemplate data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;