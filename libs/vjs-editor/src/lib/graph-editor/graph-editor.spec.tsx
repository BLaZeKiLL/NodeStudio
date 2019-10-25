import React from 'react';
import { render } from '@testing-library/react';

import { GraphEditor } from './graph-editor';

describe(' GraphEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GraphEditor />);
    expect(baseElement).toBeTruthy();
  });
});
