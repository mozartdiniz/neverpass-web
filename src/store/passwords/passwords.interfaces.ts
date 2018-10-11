import * as actionTypes from '../actionTypes';

export interface IPasswordState {
  selectedPassword: IPassword | null;
  passwords: IPassword[];
}

export interface IPassword {
  id: string;
  website: string;
  email: string;
  note: string;
  login: string;
  value: string;
  name: string;
  alwaysLogMe: boolean;
}

export interface IGetPasswords {
  type: typeof actionTypes.GET_PASSWORDS;
  passwords: IPassword[];
}

export interface ILoadPasswordsFromFirebaseAction {
  type: typeof actionTypes.LOAD_PASSWORDS_FROM_FIREBASE;
  passwords: IPassword[];
}

export interface IEditPasswordAction {
  type: typeof actionTypes.EDIT_PASSWORD;
  id: string;
}

export interface IUpdatePasswordAction {
  type: typeof actionTypes.UPDATE_PASSWORD;
  password: IPassword;
}

export interface ISaveNewPasswordAction {
  type: typeof actionTypes.SAVE_NEW_PASSWORD;
  password: IPassword;
}
