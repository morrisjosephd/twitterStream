import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('is rendererd', () => {
    const app = wrapper.find('.netFlow-app');

    expect(app).toHaveLength(1);
  });
});
