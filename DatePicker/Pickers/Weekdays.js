import React, { Component } from 'react';
import styled from 'styled-components/native';
import { getFullDayOfWeek } from 'react-toolbox-core';
import Weekday from './Weekday';

class Weekdays extends Component {
  renderDay = weekDay => {
    const { locale } = this.props;
    const fullDay = getFullDayOfWeek(weekDay, locale);
    return (
      <Weekday key={fullDay} weekDay={weekDay}>
        {fullDay}
      </Weekday>
    );
  };

  render() {
    const { sundayFirstDayOfWeek } = this.props;
    const daysIdxs = getSortedDaysIdx(sundayFirstDayOfWeek);
    return (
      <WeekdaysWrapper>
        {daysIdxs.map(this.renderDay)}
      </WeekdaysWrapper>    
    );
  }
}

const WeekdaysWrapper = styled.View`
  align-items: center;
  border-bottom-color: #333333;
  border-bottom-width: 1;
  flex-direction: row;
  justify-content: center;
  padding: 5;
`;

function getSortedDaysIdx(sundayFirstDayOfWeek) {
  const indexes = [0, 1, 2, 3, 4, 5, 6];
  return sundayFirstDayOfWeek
    ? [...indexes.slice(1), indexes[0]]
    : indexes;
}

export default Weekdays;
