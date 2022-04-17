import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App /> component', () => {

});

//test rendering a list of events
test('render list of events', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
  