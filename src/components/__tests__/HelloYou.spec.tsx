import React from 'react';
import { shallow } from 'enzyme';

import { HelloYou } from '../HelloYou';

describe('Component: HelloYou', () => {
    test('should render without error', () => {
        expect(shallow(<HelloYou />).contains(<div>HelloYou</div>)).toBe(true);
    });
});
