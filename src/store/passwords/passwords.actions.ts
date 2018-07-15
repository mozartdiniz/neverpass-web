import * as actionTypes from '../actionTypes';

import { IPassword } from './passwords.interfaces';

export const editPassword = (id: string) => ({
  type: actionTypes.EDIT_PASSWORD,
  id
});

export const updatePassword = (password: IPassword) => ({
  type: actionTypes.UPDATE_PASSWORD,
  password
});

export const saveNewPassword = (password: IPassword) => ({
  type: actionTypes.SAVE_NEW_PASSWORD,
  password
});
