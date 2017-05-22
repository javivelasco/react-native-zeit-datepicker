import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TouchableRipple from '../../TouchableRipple';

const IconClose = props => (
  <Wrapper>
    <IconRipple rippleColor="#979797" {...props}>
      <Icon color="#979797" name="close" size={26} />
    </IconRipple>
  </Wrapper>
);

IconClose.propTypes = {
  onPress: PropTypes.func,
};

const Wrapper = styled.View`
  min-width: 80;
`;

const IconRipple = styled(TouchableRipple)`
  border-radius: 13;
  overflow: hidden;
  width: 26;
`;

export default IconClose;
