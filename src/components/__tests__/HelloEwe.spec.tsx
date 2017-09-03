import React from 'react';
import { shallow } from 'enzyme';

import { HelloEwe } from '../HelloEwe';

describe('Component: HelloEwe', () => {
    test('should render without error', () => {
        expect(shallow(<HelloEwe />).contains(<div>HelloEwe</div>)).toBe(true);
    });
});
