import React from 'react';
import { shallow, mount } from 'enzyme';
import ItemListing from 'components/ItemListing/ItemListing';
import { ListGroupItem } from 'reactstrap';

/**
 * Smoke test
 * */
describe('<ItemListing />', () => {
  const items = [
    { key: 0, name: 'Item 1' },
    { key: 1, name: 'Item 2' },
    { key: 2, name: 'Item 3' }
  ];
  let wrapper;
  const mockRemoveItemfn = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <ItemListing items={items} removeItem={mockRemoveItemfn} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Render without crasing', () => {
    shallow(<ItemListing items={items} removeItem={mockRemoveItemfn} />);
  });

  it('List must show 3 Items', () => {
    expect(wrapper.find(ListGroupItem).length).toBe(3);
  });
});
