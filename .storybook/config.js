import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/Basic');
  require('../src/stories/Search');
  require('../src/stories/ItemListing');
}

configure(loadStories, module);
