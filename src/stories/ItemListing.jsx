import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
/* eslint-enable */
import ItemListing from 'components/ItemListing/ItemListing';

const items = [{ id: 0, name: 'Item 1' }];

storiesOf('ItemListing', module)
  .addDecorator(withKnobs)
  .add('Item Listing with no items', () => (
    <ItemListing items={[]} removeItem={action('Click to remove the item')} />
  ))
  .add('Item Listing with items', () => (
    <ItemListing
      items={items}
      removeItem={action('Click to remove the item')}
    />
  ));
