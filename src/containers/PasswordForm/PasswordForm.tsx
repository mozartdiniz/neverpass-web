import * as React from 'react';
import { IPassword } from '../../store/passwords/passwords.interfaces';
import { Button } from '../../components/Button/Button';
import { v4 as uuid } from 'uuid';
import { IReactFormEvents } from './PasswordForm.types';
import GeneratePassword from '../GeneratePassword/GeneratePassword';

export interface IPasswordFormProps {
  selectedPassword: IPassword | undefined;

  onCloseForm: () => void;
  onSaveForm: (password: IPassword) => void;
}

export interface IPasswordFormState {
  password: IPassword;
  showGeneratePasswordDialog: boolean;
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
    },
    showGeneratePasswordDialog: false
  };

  public changeValue = (e: IReactFormEvents, key: keyof IPassword) => {
    this.setState({
      password: {
        ...this.state.password,
        [key]: e.currentTarget.value
      }
    });
  };

  public getGeneratedPassword = (password: string) => {
    this.setState({
      password: {
        ...this.state.password,
        value: password
      }
    });
  };

  public addNewPassword = () => {
    const { id } = this.state.password;

    const statePassword = {
      ...this.state.password,
      id: id ? id : uuid()
    };

    this.props.onSaveForm(statePassword);
    this.props.onCloseForm();
    this.setState({
      password: {
        ...defaultState
      }
    });
  };

  public toggleGeneratePasswordDialog = () => {
    this.setState({
      ...this.state,
      showGeneratePasswordDialog: !this.state.showGeneratePasswordDialog
    });
  };

  public componentDidUpdate(prevProps: IPasswordFormProps) {
    if (!this.props.selectedPassword) {
      return;
    }

    if (
      this.props.selectedPassword &&
      prevProps.selectedPassword &&
      this.props.selectedPassword.id === prevProps.selectedPassword.id
    ) {
      return;
    }

    this.setState({
      password: this.props.selectedPassword
    });
  }

  public closeForm = () => {
    this.setState({
      password: defaultState
    });

    this.props.onCloseForm();
  };

  public render() {
    const generatePasswordDialog = this.state.showGeneratePasswordDialog ? (
      <div>
        <GeneratePassword onGeneratePassword={this.getGeneratedPassword} />
      </div>
    ) : (
      false
    );
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
            <button onClick={this.toggleGeneratePasswordDialog}>
              Generate
            </button>
            {generatePasswordDialog}
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
          <Button text={'Cancel'} onClickHandler={this.closeForm} />
          <Button text={'Save'} onClickHandler={this.addNewPassword} />
        </div>
      </div>
    );
  }
}

export default PasswordForm;
