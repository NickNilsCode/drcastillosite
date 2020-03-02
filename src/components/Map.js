import React, { Component } from 'react';
import { Map } from '../styled-components/components/Map';

class MapComponent extends Component {
  render(){
    return (
      <Map>
        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBUtDW2kgUk1rCKcVwjQKecQIh7NwsTz-M&amp;q=116 5359 N Fresno St # 110 Fresno, CA 93710&amp;zoom=11" width="100%" height="100%"></iframe>
      </Map>
    );
  }
}

export default MapComponent;
