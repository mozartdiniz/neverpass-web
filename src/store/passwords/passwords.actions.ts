import * as actionTypes from '../actionTypes';

import {
  IPassword,
  IEditPasswordAction,
  IUpdatePasswordAction,
  ISaveNewPasswordAction
} from './passwords.interfaces';
import database from '../../firebase';

export const getPasswords = (passwords: IPassword[]) => ({
  type: actionTypes.GET_PASSWORDS,
  passwords
});

export const getPasswordsFromFirebase = () => (dispatch: any) => {
  const passwords: IPassword[] = [];
  database
    .ref(`/passwords`)
    .once('value', snap => {
      snap.forEach(data => {
        passwords.push(data.val());
      });
    })
    .then(() => dispatch(getPasswords(passwords)));
};

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

export const savePasswordToFirebase = (password: IPassword) => (
  dispatch: any
) =>
  database
    .ref(`/passwords/${password.id}`)
    .set(password)
    .then(() => dispatch(saveNewPassword(password)));
