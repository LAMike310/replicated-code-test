import * as types from './action-types';

export const registerUser = (user) => {
  return {
    type: types.REGISTER_USER,
    user
  };
}
