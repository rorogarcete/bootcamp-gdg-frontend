import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
/* eslint-enable */
import Basic from 'components/Basic/Basic';

const items = [{ id: 0, name: 'Item 1' }];

storiesOf('Basic', module)
  .addDecorator(withKnobs)
  .add('Basic with no items', () => (
    <Basic
      addItem={action('click to addItem')}
      removeItem={action('click to remove item')}
      resetItems={action('Click to reset all items')}
      searchItem={action('Click to search an item')}
    />
  ))
  .add('Basic with one item', () => (
    <Basic
      items={items}
      addItem={action('click to addItem')}
      removeItem={action('click to remove item')}
      resetItems={action('Click to reset all items')}
      searchItem={action('Click to search an item')}
    />
  ));
