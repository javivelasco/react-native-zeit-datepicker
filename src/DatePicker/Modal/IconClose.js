import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TouchableRipple from '../../TouchableRipple';

const IconClose = props => (
  <Wrapper>
    <IconRipple rippleColor="#979797" {...props}>
      <Icon name="close" size={26} color="#979797" />
    </IconRipple>
  </Wrapper>
)

const Wrapper = styled.View`
  min-width: 80;
`;

const IconRipple = styled(TouchableRipple)`
  border-radius: 13;
  overflow: hidden;
  width: 26;
`;

export default IconClose;
