import * as React from 'react';
import { IPassword } from '../../store/passwords/passwords.interfaces';
import { Button } from '../../components/Button/Button';
import { v4 as uuid } from 'uuid';

export type IReactFormEvents =
  | React.FormEvent<HTMLInputElement>
  | React.FormEvent<HTMLTextAreaElement>;

export interface IPasswordFormProps {
  selectedPassword?: IPassword;

  onCloseForm: () => void;
  onSaveForm: (password: IPassword) => void;
}

export interface IPasswordFormState {
  password: IPassword;
}

const defaultState: IPassword = {
  id: '',
  website: '',
  email: '',
  note: '',
  login: '',
  value: '',
  name: '',
  alwaysLogMe: false
};

class PasswordForm extends React.Component<
  IPasswordFormProps,
  IPasswordFormState
> {
  public state = {
    password: {
      ...defaultState
    }
  };

  public changeValue = (e: IReactFormEvents, key: keyof IPassword) => {
    this.setState({
      password: {
        ...this.state.password,
        [key]: e.currentTarget.value
      }
    });
  };

  public addNewPassword = () => {
    const statePassword = {
      ...this.state.password,
      id: uuid()
    };

    this.props.onSaveForm(statePassword);
    this.props.onCloseForm();
    this.setState({
      password: {
        ...defaultState
      }
    });
  };

  public render() {
    return (
      <div>
        <div>
          <div>Name</div>
          <div>
            <input
              type="text"
              value={this.state.password.name}
              onChange={e => this.changeValue(e, 'name')}
            />
          </div>
        </div>
        <div>
          <div>Email</div>
          <div>
            <input
              type="email"
              value={this.state.password.email}
              onChange={e => this.changeValue(e, 'email')}
            />
          </div>
        </div>
        <div>
          <div>Login</div>
          <div>
            <input
              type="text"
              value={this.state.password.login}
              onChange={e => this.changeValue(e, 'login')}
            />
          </div>
        </div>
        <div>
          <div>Password</div>
          <div>
            <input
              type="password"
              value={this.state.password.value}
              onChange={e => this.changeValue(e, 'value')}
            />
          </div>
        </div>
        <div>
          <div>Website</div>
          <div>
            <input
              type="text"
              value={this.state.password.website}
              onChange={e => this.changeValue(e, 'website')}
            />
          </div>
        </div>
        <div>
          <div>Note</div>
          <div>
            <textarea
              value={this.state.password.note}
              onChange={e => this.changeValue(e, 'note')}
            />
          </div>
        </div>
        <div>
          <Button text={'Cancel'} onClickHandler={this.props.onCloseForm} />
          <Button text={'Save'} onClickHandler={this.addNewPassword} />
        </div>
      </div>
    );
  }
}

export default PasswordForm;
