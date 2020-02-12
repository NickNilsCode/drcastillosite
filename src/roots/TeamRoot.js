import React, { Component } from 'react';
import Team from '../pages/TeamPage';

class Root extends Component {
    render() {
        return <Team data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;