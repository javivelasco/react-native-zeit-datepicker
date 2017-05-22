import React from 'react';
import { Image } from 'react-native';

const Logo = ({ width }) => (
  <Image
    source={require('./logo.png')}
    style={{ height: width * 300 / 340, width }}
  />
);

Logo.defaultProps = {
  width: 100,
};

export default Logo;
