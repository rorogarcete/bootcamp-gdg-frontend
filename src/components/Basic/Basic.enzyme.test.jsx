import React from 'react';
import { shallow, mount } from 'enzyme';
import Basic from 'components/Basic/Basic';
import Search from 'components/Search/Search';
import ItemListing from 'components/ItemListing/ItemListing';
import { Button } from 'reactstrap';

/**
 * Smoke test
 * */
describe('<Basic />', () => {
  let wrapper;
  const mockLoginfn = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <Basic
        addItem={mockLoginfn}
        removeItem={mockLoginfn}
        resetItems={mockLoginfn}
        searchItem={mockLoginfn}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Render without crasing', () => {
    shallow(
      <Basic
        addItem={mockLoginfn}
        removeItem={mockLoginfn}
        resetItems={mockLoginfn}
        searchItem={mockLoginfn}
      />
    );
  });

  it('Render the Search bar', () => {
    expect(wrapper.find(Search).length).toBe(1);
  });

  it('Render the ItemListing', () => {
    expect(wrapper.find(ItemListing).length).toBe(1);
  });
});
