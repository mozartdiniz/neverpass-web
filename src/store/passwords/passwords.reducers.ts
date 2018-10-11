import * as actionTypes from '../actionTypes';
import {
  IPasswordState,
  IEditPasswordAction,
  ISaveNewPasswordAction,
  IGetPasswords,
  IPassword
} from './passwords.interfaces';
import { AppAction } from '../interfaces';

const initialState: IPasswordState = {
  selectedPassword: null,
  passwords: []
};

const editPassword = (state: IPasswordState, action: IEditPasswordAction) => ({
  ...state,
  selectedPassword: state.passwords.find(password => password.id === action.id)
});

const getPasswords = (state: IPasswordState, action: IGetPasswords) => ({
  ...state,
  passwords: action.passwords
});

const saveNewPassword = (
  state: IPasswordState,
  action: ISaveNewPasswordAction
) => {
  if (
    state.passwords.find(
      (password: IPassword) => password.id === action.password.id
    )
  ) {
    return {
      ...state,
      passwords: state.passwords.map(
        (password: IPassword) =>
          password.id === action.password.id ? action.password : password
      )
    };
  }

  return {
    ...state,
    passwords: state.passwords.concat([
      {
        ...action.password
      }
    ])
  };
};

const reducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case actionTypes.GET_PASSWORDS:
      return getPasswords(state, action);
    case actionTypes.EDIT_PASSWORD:
      return editPassword(state, action);
    case actionTypes.SAVE_NEW_PASSWORD:
      return saveNewPassword(state, action);
    default:
      return state;
  }
};

export default reducer;
