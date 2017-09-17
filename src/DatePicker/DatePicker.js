import styled from 'styled-components/native';
import { datePickerFactory } from 'react-toolbox-core';
import { RangePicker } from './Pickers';
import Month from './Month';

const DatePicker = datePickerFactory({
  NextNode: Empty,
  PickerWrapper: styled.View`flex: 1;`,
  PrevNode: Empty,
  RangePicker,
  Month,
});

function Empty() {
  return null;
}

export default DatePicker;
