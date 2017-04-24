
import {
  LIST_WELCOME_ITEMS
} from '../actions/welcome';
// users reducer
export default function welcomeItems(state = [], action) {
  switch (action.type) {
    case 'LIST_WELCOME_ITEMS':
      return [];

    // initial state
    default:
      return state;
  }
}
