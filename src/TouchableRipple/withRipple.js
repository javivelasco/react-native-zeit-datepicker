import { withRippleFactory } from 'react-toolbox-core';
import RippleWrapper from './RippleWrapper';
import RippleNode from './RippleNode';

const withRipple = withRippleFactory({
  passthrough: (props, nodeName) => {
    switch (nodeName) {
      case 'RippleNode':
        return { color: props.rippleColor };
      default:
        return {};
    }
  },
  RippleWrapper,
  RippleNode,
});

export default withRipple;
