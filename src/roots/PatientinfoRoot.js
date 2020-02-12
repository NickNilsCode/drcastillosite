import React, { Component } from 'react';
import Patientinfo from '../pages/PatientinfoPage';

class Root extends Component {
    render() {
        return <Patientinfo data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;