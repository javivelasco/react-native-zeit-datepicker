import React from 'react';
import styled from 'styled-components/native';

const Weekday = ({ children, ...rest }) => (
  <WeekdayNode {...rest}>
    {children.charAt(0)}
  </WeekdayNode>
);

const WeekdayNode = styled.Text`
  color: #fff;
  flex-direction: row;
  flex: 7;
  line-height: 40;
  text-align: center;
`;

export default Weekday;
