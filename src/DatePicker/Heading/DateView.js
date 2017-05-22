import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import parsedDate from '../../utils/parsedDate';

const DateView = ({ children, date, start }) => (
  <Wrapper>
    <Title start={start}>{children}</Title>
    <DateNode start={start}>{parsedDate(date)}</DateNode>
  </Wrapper>
);

DateView.propTypes = {
  children: PropTypes.node,
  date: PropTypes.instanceOf(Date),
  start: PropTypes.bool,
};

const Wrapper = styled.View`
  flex-direction: column;
  flex: 1;
`;

const Title = styled.Text`
  color: #FFF;
  font-size: 12;
  text-align: ${props => (props.start ? 'left' : 'right')};
`;

const DateNode = styled.Text`
  color: #FFF;
  flex-grow: 1;
  font-size: 18;
  font-weight: 300;
  line-height: 36;
  text-align: ${props => (props.start ? 'left' : 'right')};
`;

export default DateView;
