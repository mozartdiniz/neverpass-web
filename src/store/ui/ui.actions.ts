import * as actionTypes from '../actionTypes';
import { INewPasswordAction, ICancelNewPasswordAction } from './ui.interfaces';

export const newPassword = (): INewPasswordAction => ({
  type: actionTypes.NEW_PASSWORD
});

export const cancelNewPassword = (): ICancelNewPasswordAction => ({
  type: actionTypes.CANCEL_NEW_PASSWORD
});
