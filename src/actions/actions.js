/*
 * Action types
 */
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SEARCH_ITEM = 'SEARCH';
export const RESET_ITEMS = 'RESET';

/*
 * Action creators
 */
export const addItem = name => ({
  type: ADD_ITEM,
  name
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id
});

export const resetItems = () => ({
  type: RESET_ITEMS
});

export const searchItem = keyword => ({
  type: SEARCH_ITEM,
  keyword
});
