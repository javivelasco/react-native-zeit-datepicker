import React from 'react';
import styled from 'styled-components/native';
import TouchableRipple from '../../TouchableRipple';

const DoneButton = props => (
  <TouchableRipple rippleColor="#979797" {...props}>
    <Text isValid={props.isValid}>Done</Text>
  </TouchableRipple>
);

const Text = styled.Text`
  color: ${props => props.isValid ? '#50E3C2' : '#979797' };
  font-size: 16;
  min-width: 80;
  text-align: right;
`;

export default DoneButton;
