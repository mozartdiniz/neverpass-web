import {
  INewPasswordAction,
  ICancelNewPasswordAction,
  IUIState
} from './ui/ui.interfaces';
import {
  IEditPasswordAction,
  IUpdatePasswordAction,
  ISaveNewPasswordAction,
  IPasswordState,
  IGetPasswords
} from './passwords/passwords.interfaces';

export type AppAction =
  | INewPasswordAction
  | ICancelNewPasswordAction
  | IEditPasswordAction
  | IUpdatePasswordAction
  | IGetPasswords
  | ISaveNewPasswordAction;

export interface IAppState {
  ui: IUIState;
  password: IPasswordState;
}
