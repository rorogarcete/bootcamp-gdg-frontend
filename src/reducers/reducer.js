import {
  ADD_ITEM,
  REMOVE_ITEM,
  RESET_ITEMS,
  SEARCH_ITEM
} from '../actions/actions';
import initialState from '../store/initialState';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const items = [...state.items];

      const newItem = {
        id: items.length,
        name: action.name
      };
      items.push(newItem);

      return {
        ...state,
        items
      };
    }

    case REMOVE_ITEM: {
      let items = [...state.items];
      items = items.filter(item => item.id !== action.id);
      return {
        ...state,
        items
      };
    }

    case SEARCH_ITEM: {
      let items = [...state.items];
      items = items.filter(item => item.name.match(action.keyword));

      return {
        ...state,
        items
      };
    }

    case RESET_ITEMS: {
      const items = [];

      return {
        ...state,
        items
      };
    }

    default:
      return state;
  }
}
