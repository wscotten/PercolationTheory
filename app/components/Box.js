import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';

export default class Box extends PureComponent {
  onPress = () => this.props.onPress(this.props.index, this.props.block)

  render() {
    const {
      block,
      backgroundColor,
      height,
      width,
      onClick,
      index,
    } = this.props;
    return (
      <TouchableOpacity
        style={{
          width,
          height,
          borderWidth: 1,
          backgroundColor,
        }}
        onPress={this.onPress}
      />
    );
  }
}
