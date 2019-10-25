import React from 'react';
import { render } from '@testing-library/react';

import VjsEditor from './vjs-editor';

describe(' VjsEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VjsEditor />);
    expect(baseElement).toBeTruthy();
  });
});
