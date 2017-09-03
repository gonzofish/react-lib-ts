import React from 'react';
import { shallow } from 'enzyme';

import { HelloYou } from '../HelloYou';
import { ReactLibTs } from '../ReactLibTs';

describe('Component: ReactLibTs', () => {
    test('should render without error', () => {
        expect(shallow(<ReactLibTs />).contains(<HelloYou />)).toBe(true);
    });
});
