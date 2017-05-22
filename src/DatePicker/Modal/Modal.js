import React, { Component } from 'react';
import { Modal } from 'react-native';
import { isBefore, isToday } from 'date-fns';
import styled from 'styled-components/native';
import IconClose from './IconClose';
import DoneButton from './DoneButton';
import DatePicker from '../DatePicker';
import Logo from '../../Logo';

export default class PickerModal extends Component {
  state = getInitialState(this.props);

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      this.setState(getInitialState(nextProps));
    }
  }

  handleChange = (value) => {
    this.setState({ value });
  };

  isDayDisabled = (date) => (
    isBefore(date, Date.now()) && !isToday(date)
  );

  handleFocusedInputChange = (focusedInput) => {
    this.setState({ focusedInput });
  };

  render() {
    return (
      <Modal animationType="slide" transparent={false} visible={this.props.active}>
        <ModalWrapper>
          <HeaderWrapper>
            <IconClose onPress={this.props.onClose} />
            <LogoWrapper>
              <Logo width={34} />
            </LogoWrapper>
            <DoneButton
              isValid={this.state.value.from && this.state.value.to}
              onPress={this.props.onClose}
            />
          </HeaderWrapper>
          <DatePicker
            focusedInput={this.state.focusedInput}
            isDayDisabled={this.isDayDisabled}
            numberOfMonths={1}
            onChange={this.handleChange}
            onFocusedInputChange={this.handleFocusedInputChange}
            resetToWhenFromChanges
            selected={this.state.value}
            viewDate={new Date()}
          />
        </ModalWrapper>
      </Modal>
    );
  }
}

const getInitialState = props => ({
  focusedInput: null,
  value: { from: props.value.from, to: props.value.to },
});

const ModalWrapper = styled.View`
  background-color: #000;
  flex: 1;
  padding-top: 20;
`;

const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15;
`;

const LogoWrapper = styled.View`
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;
