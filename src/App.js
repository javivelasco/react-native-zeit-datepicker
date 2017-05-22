import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Logo from './Logo';
import Button from './Button';
import DatePicker from './DatePicker';
import parsedDate from './utils/parsedDate';

class App extends React.Component {
  state = {
    active: false,
    value: {},
  };

  handlePickerOpen = () => {
    this.setState({ active: true });
  };

  handlePickerClose = () => {
    this.setState({ active: false });
  };

  handleChange = value => {
    this.setState({ active: false, value });
  };

  render() {
    const { value: { from, to } } = this.state;
    return (
      <AppWrapper>
        <StatusBar barStyle="light-content" />
        <Logo width={60} />
        <MainText>
          This is a demo of a working DatePicker for zeit.co
          using the upcoming react-toolbox-core agnostic components
        </MainText>
        <SelectedValues>
          <SelectedValue>{parsedDate(from)}</SelectedValue>
          <SelectedValue> to </SelectedValue>
          <SelectedValue>{parsedDate(to)}</SelectedValue>
        </SelectedValues>
        <Button label="Open now" onPress={this.handlePickerOpen} />
        <DatePicker
          active={this.state.active}
          onClose={this.handlePickerClose}
          onChange={this.handleChange}
          value={this.state.value}
        />
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.View`
  align-items: center;
  background-color: #000;
  flex: 1;
  justify-content: center;
`;

const MainText = styled.Text`
  color: #fff;
  margin-bottom: 20;
  margin-top: 20;
  max-width: 280;
  text-align: center;
`;

const SelectedValues = styled.View`
  flex-direction: row;
  margin-bottom: 20;
`;

const SelectedValue = styled.Text`
  color: #979797;
`;

export default App;
