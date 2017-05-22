import React, { Component } from 'react';
import { View } from 'react-native';
import { isSameDay } from 'date-fns';
import { dayFactory } from 'react-toolbox-core';
import styled, { css } from 'styled-components/native';

class DayNode extends Component {
  state = { 
    pressed: false,
  };

  handlePress = (event) => {
    this.props.onPress(this.props.day, event);
  };

  handleHideUnderlay = () => {
    this.setState({ pressed: false });
  };

  handleShowUnderlay = () => {
    this.setState({ pressed: true });
  };

  render() {
    const { pressed } = this.state;
    const { children, onPress: _onPress, monthWidth, ...rest } = this.props;
    const dayWidthNoRound = Math.floor(monthWidth / 7);
    const dayWidth = dayWidthNoRound % 2 === 0 ? dayWidthNoRound : dayWidthNoRound - 1;
    const { selection: { from, to } } = this.props;
    const selectedSameDayRange = from && to && isSameDay(from, to);

    return (
      <DayWrapper selectedSameDayRange={selectedSameDayRange} width={dayWidth} {...rest}>
        <DayNodeWrapper selectedSameDayRange={selectedSameDayRange} width={dayWidth} {...rest}>
          {!rest.outOfMonth && (
            <TouchableDayNode
              onHideUnderlay={this.handleHideUnderlay}
              onPress={!rest.disabled ? this.handlePress : null}
              onShowUnderlay={this.handleShowUnderlay}
              underlayColor="#FFF"
            >
              <View aspectRatio={1} style={{ alignItems: 'center', justifyContent: 'center' }}>  
                <DayNodeText pressed={pressed} {...rest}>
                  {children}
                </DayNodeText>
              </View>
            </TouchableDayNode>
          )}
        </DayNodeWrapper>
      </DayWrapper>
    );
  }
}

const DayWrapper = styled.View`
  align-items: ${getDayWrapperAlignItems};
  flex-direction: column;
  height: 44;
  width: ${props => props.width};
`;

function getDayWrapperAlignItems(props) {
  if (props.selected && props.inRange && !props.selectedSameDayRange) {
    return props.selectedSource === 'from'
      ? 'flex-end'
      : 'flex-start';
  }
  return 'center';
}

const DayNodeWrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  width: 44;
  ${getTodayStyles}
  ${getInRangeStyles}
  ${getSelectedStyles}
`;

function getTodayStyles(props) {
  if (props.today && !props.selected) {
    return css`
      border-bottom-left-radius: 22;
      border-bottom-right-radius: 22;
      border-color: #666;
      border-top-left-radius: 22;
      border-top-right-radius: 22;
      border-width: 1;
      height: 42;
    `;
  }
}

function getSelectedStyles(props) {
  if (props.selected && !props.outOfMonth) {
    if (props.selectedSameDayRange || !props.inRange) {
      return css`
        background-color: #fff;
        border-bottom-left-radius: 22;
        border-bottom-right-radius: 22;
        border-color: #fff;
        border-top-left-radius: 22;
        border-top-right-radius: 22;
      `;
    }

    if (props.inRange) {
      if (props.selectedSource === 'from') {
        return css`
          background-color: #fff;
          border-bottom-left-radius: 22; 
          border-bottom-right-radius: 0;
          border-top-left-radius: 22;
          border-top-right-radius: 0;
          padding-right: ${(props.width - 44) / 2};
          width: ${44 + ((props.width - 44) / 2)};
        `;
      } else {
        return css`
          background-color: #fff;
          border-bottom-left-radius: 0; 
          border-bottom-right-radius: 22;
          border-top-left-radius: 0;
          border-top-right-radius: 22;
          padding-left: ${(props.width - 44) / 2};
          width: ${44 + ((props.width - 44) / 2)};
        `;
      }
    }
  }
}

function getInRangeStyles(props) {
  if (props.inRange && !props.selected) {
    return css`
      background-color: #ffffff;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      width: ${props.width};
    `;
  }
}

const TouchableDayNode = styled.TouchableHighlight`
  border-radius: 22;
  height: 44;
  width: 44;
`;

const DayNodeText = styled.Text`
  color: ${getTextColor};
  font-size: 14;
  text-align: center;
  width: 20;
`;

function getTextColor(props) {
  if (props.disabled) return '#666666';
  if (props.selected || props.inRange || props.pressed) return '#000000';
  return '#ffffff';
}

const Day = dayFactory({
  passthrough: props => ({
    day: props.day,
    monthWidth: props.monthWidth,
    selection: props.selected || {},
  }),
  DayNode,
});

export default Day;
