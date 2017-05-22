import React from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native';
import TouchableRipple from '../TouchableRipple';

const RawButton = ({ children, label, onPress, ...rest }) => (
  <ButtonRipple onPress={onPress} rippleColor="#50E3C2">
    <ButtonNode {...rest}>
      <ButtonText>{label}</ButtonText>
      {children}
    </ButtonNode>
  </ButtonRipple>
);

const ButtonRipple = styled(TouchableRipple)`
  border-radius: 3;
  overflow: hidden;
`;

const ButtonNode = styled.View`
  align-items: center;
  border-radius: 3;
  justify-content: center;
  padding: 0 10;
`;

const ButtonText = styled.Text`
  color: #50E3C2;
  font-size: 14;
  line-height: 28;
`;

export default RawButton;
