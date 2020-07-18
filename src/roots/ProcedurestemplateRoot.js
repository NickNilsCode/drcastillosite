import React, { Component } from 'react';
import Procedurestemplate from '../pages/ProcedurestemplatePage';

class Root extends Component {
    render() {
        return <Procedurestemplate data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;
