import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, View } from 'react-native';
import withRipple from './withRipple';

const Touchable = ({ children, onTouchStart, onTouchEnd, style, ...rest }) => (
  <TouchableWithoutFeedback {...rest}>
    <View onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={style}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

Touchable.propTypes = {
  children: PropTypes.node,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  style: PropTypes.array,
};

export default withRipple()(Touchable);
