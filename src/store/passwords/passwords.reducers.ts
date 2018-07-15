import * as actionTypes from '../actionTypes';
import { IPasswordState } from './passwords.interfaces';

const initialState: IPasswordState = {
  selectedPassword: null,
  passwords: []
};

const editPassword = (state: IPasswordState, action: any) => ({
  ...state,
  selectedPassword: state.passwords.find(password => password.id === action.id)
});

const saveNewPassword = (state: IPasswordState, action: any) => ({
  ...state,
  passwords: state.passwords.concat([...action.password])
});

const reducer = (state = initialState, action: any) => {
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
