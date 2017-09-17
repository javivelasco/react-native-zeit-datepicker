import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import TouchableRipple from '../../TouchableRipple';

const DoneButton = props => (
  <Wrapper>
    <DoneButtonRipple
      rippleColor={getButtonColor(props)}
      {...props}
      ripple={!!props.isValid}
    >
      <Text isValid={props.isValid}>Done</Text>
    </DoneButtonRipple>
  </Wrapper>
);

DoneButton.propTypes = {
  isValid: PropTypes.bool,
  onPress: PropTypes.func,
};

const Wrapper = styled.View`min-width: 80;`;

const DoneButtonRipple = styled(TouchableRipple)`
  align-self: flex-end;
  border-radius: 3;
  overflow: hidden;
`;

const Text = styled.Text`
  color: ${getButtonColor};
  font-size: 16;
  padding-bottom: 4;
  padding-left: 4;
  padding-right: 4;
  padding-top: 4;
`;

function getButtonColor(props) {
  return props.isValid ? '#50E3C2' : '#979797';
}

export default DoneButton;
