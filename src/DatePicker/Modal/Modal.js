import React, { Component } from 'react';
import { Modal } from 'react-native';
import { isBefore, isToday } from 'date-fns';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconClose from './IconClose';
import DoneButton from './DoneButton';
import DatePicker from '../DatePicker';
import Logo from '../../Logo';

export default class PickerModal extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    value: PropTypes.shape({
      from: PropTypes.instanceOf(Date),
      to: PropTypes.instanceOf(Date),
    }),
  };

  today = new Date();
  state = getInitialState(this.props);

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      this.setState(getInitialState(nextProps));
    }
  }

  handleChange = value => {
    this.setState({ value });
  };

  handleDonePress = () => {
    if (this.isValid()) {
      this.props.onChange(this.state.value);
    }
  };

  isValid = () => !!this.state.value.from && !!this.state.value.to;

  isDayDisabled = date => isBefore(date, Date.now()) && !isToday(date);

  handleFocusedInputChange = focusedInput => {
    this.setState({ focusedInput });
  };

  render() {
    const { active, onClose } = this.props;
    const { value } = this.state;

    return (
      <Modal animationType="slide" transparent={false} visible={active}>
        <ModalWrapper>
          <HeaderWrapper>
            <IconClose onPress={onClose} />
            <LogoWrapper>
              <Logo width={34} />
            </LogoWrapper>
            <DoneButton
              isValid={this.isValid()}
              onPress={this.handleDonePress}
            />
          </HeaderWrapper>
          <DatePicker
            focusedInput={this.state.focusedInput}
            isDayDisabled={this.isDayDisabled}
            numberOfMonths={1}
            onChange={this.handleChange}
            onFocusedInputChange={this.handleFocusedInputChange}
            resetToWhenFromChanges
            selected={value}
            viewDate={this.today}
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
