import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Button from './Button';
import Logo from './Logo';
import DatePicker from './DatePicker';

class App extends React.Component {
  state = {
    active: false,
  };

  handlePickerOpen = () => {
    this.setState({ active: true });
  };

  handlePickerClose = () => {
    this.setState({ active: false });
  };

  render() {
    return (
      <AppWrapper>
        <StatusBar barStyle="light-content" />
        <Logo width={80} />
        <MainText>
          This is a demo of a working DatePicker for zeit.co
          using the upcoming react-toolbox-core agnostic components
        </MainText>
        <Button label="Open now" onPress={this.handlePickerOpen} />
        <DatePicker 
          active={this.state.active}
          onClose={this.handlePickerClose}
          value={{}}
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

export default App;
