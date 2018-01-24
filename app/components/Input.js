import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

export default class Input extends PureComponent {

  onChange = (e) => {
    const text = e.nativeEvent.text;
    const {
      name,
      onChange,
    } = this.props;
    onChange({
      name, 
      text,
    })
  };

  render() {
    const {
      value,
      name
    } = this.props;
    return (
      <TextInput
        style={{
          marginTop: 5,
          backgroundColor: 'white',
          width: '80%',
          height: 20,
          marginLeft: '10%',
        }}
        keyboardType={'numeric'}
        value={value}
        name={name}
        maxLength={4}
        onChange={this.onChange}
      />
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
