import { render } from '@testing-library/react';

import ReactNativeComp from './react-native-comp';

describe('ReactNativeComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNativeComp />);
    expect(baseElement).toBeTruthy();
  });
});
