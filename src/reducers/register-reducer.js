import * as types from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.REGISTER_USER:
      return action.user;
    default:
      return state;
  }
};
