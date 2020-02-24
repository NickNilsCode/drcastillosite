import React, { Component } from 'react';
import { Dropdown } from '../styled-components/components/Dropdown';

class DropdownComponent extends Component {
  render(){
    const { onChange, options, value, required, multiple, onClick, placeholder } = this.props;

    return (
      <Dropdown
        value={value}
        onChange={() => {}}
        required={required}
        multiple={multiple}
      >
        <option className="greyOption" onClick={onClick} value="">{placeholder}</option>
        {
          this.props.options.map((a,i) => {
            return (
              <option onClick={onClick} key={i} value={a}>{a}</option>
            )
          })
        }
      </Dropdown>
    );
  }
}

export default DropdownComponent;
