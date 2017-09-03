import React from 'react';
import { shallow } from 'enzyme';

import { MissingNo } from '../MissingNo';

describe('Component: MissingNo', () => {
    test('should render without error', () => {
        expect(shallow(<MissingNo />).contains(<div>MissingNo</div>)).toBe(true);
    });
});
