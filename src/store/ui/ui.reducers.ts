import * as actionTypes from '../actionTypes';
import {
  IUIState,
  INewPasswordAction,
  ICancelNewPasswordAction
} from './ui.interfaces';
import { AppAction } from '../interfaces';

const initialState: IUIState = {
  showNewPasswordModal: false
};

const newPassword = (state: IUIState, action: INewPasswordAction) => ({
  ...state,
  showNewPasswordModal: true
});

const cancelNewPassword = (
  state: IUIState,
  action: ICancelNewPasswordAction
) => ({
  ...state,
  showNewPasswordModal: false
});

const reducer = (state = initialState, action: AppAction) => {
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
