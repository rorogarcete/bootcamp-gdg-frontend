import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
/* eslint-enable */
import Search from 'components/Search/Search';

storiesOf('Search', module)
  .addDecorator(withKnobs)
  .add('Search', () => <Search />);
