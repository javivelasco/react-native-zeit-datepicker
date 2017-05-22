import React from 'react';
import styled from 'styled-components/native';
import { getFullDayOfWeek, getShortMonth } from 'react-toolbox-core';

const DateView = ({ children, date, start }) => (
  <Wrapper>
    <Title start={start}>{children}</Title>
    <Date start={start}>{getDate(date)}</Date>
  </Wrapper>
);

const Wrapper = styled.View`
  flex-direction: column;
  flex: 1;
`;

const Title = styled.Text`
  color: #FFF;
  font-size: 12;
  text-align: ${props => props.start ? 'left' : 'right'};
`;

const Date = styled.Text`
  color: #FFF;
  flex-grow: 1;
  font-size: 18;
  font-weight: 300;
  line-height: 36;
  text-align: ${props => props.start ? 'left' : 'right'};
`;

function getDate(date) {
  if (!date) return '-';
  return `${getFullDayOfWeek(date.getDay())}, ${date.getDate()} ${getShortMonth(date)}`;
}

export default DateView;
