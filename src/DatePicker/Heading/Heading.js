import React from 'react';
import styled from 'styled-components/native';
import DateView from './DateView';

const Heading = ({ from, to }) => (
  <HeadingLayout>
    <DateView start date={from}>
      START DATE
    </DateView>
    <DateView date={to}>
      END DATE
    </DateView>
  </HeadingLayout>
);

const HeadingLayout = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 15;
`;

export default Heading;
