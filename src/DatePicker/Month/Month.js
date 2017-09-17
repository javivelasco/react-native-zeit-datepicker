import React, { Component } from 'react';
import { addMonths } from 'date-fns';
import { FlatList } from 'react-native';
import { monthFactory } from 'react-toolbox-core';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Day from './Day';

let cachedWidth = 0;

export default class MonthsList extends Component {
  static propTypes = {
    viewDate: PropTypes.instanceOf(Date),
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.viewDate.getTime() !== this.props.viewDate.getTime()) {
      this.setState({ data: getData(nextProps.viewDate) });
    }
  }

  state = {
    data: getData(this.props.viewDate),
    width: 0,
  };

  keyExtractor = (item, index) => item.getTime().toString();

  handleLayoutReady = event => {
    cachedWidth = event.nativeEvent.layout.width;
    this.setState({ width: cachedWidth });
  };

  renderMonth = ({ item }) => {
    const { highlighted, onDayClick, selected, ...rest } = this.props;
    const { width } = this.state;

    return (
      <Month
        {...rest}
        highlighted={highlighted}
        onDayClick={onDayClick}
        selected={selected}
        viewDate={item}
        width={cachedWidth}
      />
    );
  };

  render() {
    const { data, width } = this.state;
    return (
      <ListWrapper onLayout={this.handleLayoutReady}>
        {(width || cachedWidth) !== 0 && (
          <FlatList
            data={data}
            initialNumToRender={4}
            keyExtractor={this.keyExtractor}
            maxToRenderPerBatch={6}
            onViewableItemsChanged={this.viewableChanged}
            renderItem={this.renderMonth}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
            windowSize={4}
          />
        )}
      </ListWrapper>
    );
  }
}

const ListWrapper = styled.View`
  align-items: center;
  flex: 1;
`;

const Month = monthFactory({
  passthrough: (props, nodeName, instance) => {
    switch (nodeName) {
      case 'Day':
        return {
          monthWidth: props.width,
          onPress: function handleOnDayPress(...args) {
            props.onDayClick(...args);
          },
        };
      default:
        return {};
    }
  },
  Weekday: Empty,
  WeekdaysWrapper: Empty,
  MonthWrapper: styled.View`
    align-self: center;
    flex-direction: column;
    width: 100%;
  `,
  MonthTitle: styled.Text`
    align-items: center;
    color: white;
    font-size: 16;
    font-weight: 600;
    justify-content: center;
    line-height: 50;
    margin-left: 15;
  `,
  DaysWrapper: styled.View`flex-direction: column;`,
  DaysWeek: styled.View`
    align-items: center;
    flex-direction: row;
    flex-grow: 1;
    margin-bottom: 3;
    margin-top: 3;
  `,
  Day,
});

function getData(viewDate) {
  let months = [];

  for (let i = 0; i < 24; i++) {
    months[i] = addMonths(viewDate, i);
  }

  return months;
}

function Empty() {
  return null;
}
