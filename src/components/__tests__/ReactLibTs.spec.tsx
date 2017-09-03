import React from 'react';
import { shallow } from 'enzyme';

import { ReactLibTs } from '../ReactLibTs';

describe('Component: ReactLibTs', () => {
    test('should render without error', () => {
        expect(shallow(<ReactLibTs />).contains(<div>ReactLibTs</div>)).toBe(true);
    });
});
