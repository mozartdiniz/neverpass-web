import * as actionTypes from '../actionTypes';
import {
  IPasswordState,
  IEditPasswordAction,
  ISaveNewPasswordAction
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

const saveNewPassword = (
  state: IPasswordState,
  action: ISaveNewPasswordAction
) => ({
  ...state,
  passwords: state.passwords.concat([
    {
      ...action.password
    }
  ])
});

const reducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case actionTypes.EDIT_PASSWORD:
      return editPassword(state, action);
    case actionTypes.SAVE_NEW_PASSWORD:
      return saveNewPassword(state, action);
    default:
      return state;
  }
};

export default reducer;
