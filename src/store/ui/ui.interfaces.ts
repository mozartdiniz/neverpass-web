import * as actionTypes from '../actionTypes';

export interface IUIState {
  showNewPasswordModal: boolean;
}

export interface INewPasswordAction {
  type: typeof actionTypes.NEW_PASSWORD;
}

export interface ICancelNewPasswordAction {
  type: typeof actionTypes.CANCEL_NEW_PASSWORD;
}
