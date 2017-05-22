import React from 'react';
import styled from 'styled-components/native';
import { rangePickerFactory } from 'react-toolbox-core';
import PropTypes from 'prop-types';
import Weekdays from './Weekdays';
import Heading from '../Heading';
import Month from '../Month';

const MonthsWrapper = ({ children, selected, ...rest }) => (
  <MonthsWrapperDay {...rest}>
    <Heading from={selected && selected.from} to={selected && selected.to} />
    <Weekdays />
    {children}
  </MonthsWrapperDay>
);

MonthsWrapper.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.shape({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  }),
};

const MonthsWrapperDay = styled.View`
  flex: 1;
  flex-direction: column;
`;

const RangePicker = rangePickerFactory({
  passthrough: props => ({ selected: props.selected }),
  MonthsWrapper,
  Month,
});

export default RangePicker;
