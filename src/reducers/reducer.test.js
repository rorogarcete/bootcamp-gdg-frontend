import {
  ADD_ITEM,
  REMOVE_ITEM,
  RESET_ITEMS,
  SEARCH_ITEM
} from '../actions/actions';
import reducer from './reducer';

describe('Reducers', () => {
  // Global Functions
  let addItem;
  let removeItem;
  let removeAllItems;
  let doSearch;

  // States
  let initialState;
  let stateA;
  let stateB;
  let stateC;
  let stateD;
  let stateE;
  let stateF;
  let stateG;
  beforeEach(() => {
    addItem = name => ({
      type: ADD_ITEM,
      name
    });
    removeItem = id => ({
      type: REMOVE_ITEM,
      id
    });
    removeAllItems = () => ({
      type: RESET_ITEMS
    });
    doSearch = keyword => ({
      type: SEARCH_ITEM,
      keyword
    });
    initialState = reducer(undefined, {});
    stateA = reducer(initialState, addItem('Item 1'));
    stateB = reducer(stateA, addItem('Item 2'));
    stateC = reducer(stateB, addItem('Item 3'));
    stateD = reducer(stateC, removeItem(0));
    stateE = reducer(stateD, removeItem(1));
    stateF = reducer(stateE, removeItem(2));
    stateG = reducer(stateC, removeAllItems());
  });
  it('initial state', () => {
    expect(initialState).not.toBeNull();
    expect(initialState).toBeDefined();
    expect(initialState.items).toBeDefined();
    expect(initialState.items.length).toBe(0);
  });

  it('after 3 additions', () => {
    expect(stateC.items.length).toBe(3);
  });

  it('after 1 deletion', () => {
    expect(stateD.items.length).toBe(2);
  });

  it('after 3 deletion', () => {
    expect(stateF.items.length).toBe(0);
  });

  it('after delete all', () => {
    expect(stateG.items.length).toBe(0);
  });

  it('Return 1 result after search', () => {
    const state = reducer(stateA, doSearch('Item 1'));
    expect(state.items.length).toBe(1);
  });

  it('Return 3 results after search', () => {
    const state = reducer(stateC, doSearch('Item'));
    expect(state.items.length).toBe(3);
  });

  it('Return empty results after search', () => {
    const state = reducer(stateC, doSearch('Item 4'));
    expect(state.items.length).toBe(0);
  });
});
