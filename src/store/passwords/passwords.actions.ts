import * as actionTypes from '../actionTypes';

import {
  IPassword,
  IEditPasswordAction,
  IUpdatePasswordAction,
  ISaveNewPasswordAction
} from './passwords.interfaces';

export const editPassword = (id: string): IEditPasswordAction => ({
  type: actionTypes.EDIT_PASSWORD,
  id
});

export const updatePassword = (password: IPassword): IUpdatePasswordAction => ({
  type: actionTypes.UPDATE_PASSWORD,
  password
});

export const saveNewPassword = (
  password: IPassword
): ISaveNewPasswordAction => ({
  type: actionTypes.SAVE_NEW_PASSWORD,
  password
});
