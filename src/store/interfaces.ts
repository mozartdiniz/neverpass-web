import {
  INewPasswordAction,
  ICancelNewPasswordAction,
  IUIState
} from './ui/ui.interfaces';
import {
  IEditPasswordAction,
  IUpdatePasswordAction,
  ISaveNewPasswordAction,
  IPasswordState
} from './passwords/passwords.interfaces';

export type AppAction =
  | INewPasswordAction
  | ICancelNewPasswordAction
  | IEditPasswordAction
  | IUpdatePasswordAction
  | ISaveNewPasswordAction;

export interface IAppState {
  ui: IUIState;
  password: IPasswordState;
}
