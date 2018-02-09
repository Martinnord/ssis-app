import {
  FETCH_CURRENT_CLASS,
  FETCH_CURRENT_CLASS_SUCCESS,
  FETCH_CURRENT_CLASS_FAIL
} from './types';

const INITIAL_STATE = {
  classes: null,
  fetching: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CURRENT_CLASS:
      return { ...state, fetching: true };
    case FETCH_CURRENT_CLASS_SUCCESS:
      let currentClass;
      let upcomingClass;
      if (Object.keys(action.classes).length > 1) {
        if (Object.keys(action.classes.currentClass).length === 0) {
          currentClass = null;
        } else {
          currentClass = action.classes.currentClass;
        }
        if (Object.keys(action.classes.upcomingClass).length === 0) {
          upcomingClass = null;
        } else {
          upcomingClass = action.classes.upcomingClass;
        }
      }
      return {
        ...state,
        classes: { currentClass, upcomingClass },
        fetching: false,
        error: ''
      };
    case FETCH_CURRENT_CLASS_FAIL:
      return { ...state, error: action.error, fetching: false };
    default:
      return state;
  }
};
