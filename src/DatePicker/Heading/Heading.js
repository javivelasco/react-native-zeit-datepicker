import React from 'react';
import PropTypes from 'prop-types';
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

Heading.propTypes = {
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date),
};

const HeadingLayout = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 15;
`;

export default Heading;
