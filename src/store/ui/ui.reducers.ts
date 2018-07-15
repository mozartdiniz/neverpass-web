import * as actionTypes from '../actionTypes';
import { IUIState } from './ui.interfaces';

const initialState: IUIState = {
  showNewPasswordModal: false
};

const newPassword = (state: IUIState, action: any) => ({
  ...state,
  showNewPasswordModal: true
});

const cancelNewPassword = (state: IUIState, action: any) => ({
  ...state,
  showNewPasswordModal: false
});

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.NEW_PASSWORD:
      return newPassword(state, action);
    case actionTypes.CANCEL_NEW_PASSWORD:
      return cancelNewPassword(state, action);
    default:
      return state;
  }
};

export default reducer;
