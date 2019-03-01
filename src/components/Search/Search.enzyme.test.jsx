import React from 'react';
import { shallow } from 'enzyme';
import Search from 'components/Search/Search';
import { Button, Input } from 'reactstrap';

/**
 * Smoke test
 * */
describe('<Search />', () => {
  let wrapper;
  const mockLoginfn = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Search searchItem={mockLoginfn} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render without crasing', () => {
    shallow(<Search searchItem={mockLoginfn} />);
  });

  it('Simulate Search', () => {
    const search = () => {
      wrapper
        .find(Button)
        .at(0)
        .simulate('click');
    };
    // Simulate Input value change
    wrapper
      .find(Input)
      .at(0)
      .simulate('change', { target: { value: 'Item 0' } });
    // Searching using Input value
    search();
  });
});
