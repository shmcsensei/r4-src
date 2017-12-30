import React from 'react';

import { lifecycle } from 'recompose';

export const onMounted = func => {
  return lifecycle({
    componentDidMount() {
      func(this.props);
    },
  });
};
