import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

/**
 * Smoke test
 * */
it('renders without crashing', () => {
  shallow(<App />);
});

it('Smoke test', () => {
  const app = mount(<App />);

  const addItem = () =>
    app
      .find('button')
      .at(0)
      .simulate('click');

  const resetItems = () =>
    app
      .find('button')
      .at(1)
      .simulate('click');

  const searchItems = () =>
    app
      .find('button')
      .at(2)
      .simulate('click');

  const removeItem = () =>
    app
      .find('button')
      .at(3)
      .simulate('click');

  addItem();
  addItem();
  addItem();
  removeItem();
  searchItems();

  resetItems();
});
