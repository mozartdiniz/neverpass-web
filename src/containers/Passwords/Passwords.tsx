import * as React from 'react';
import * as uiActions from '../../store/ui/ui.actions';
import * as passwordActions from '../../store/passwords/passwords.actions';
import { connect } from 'react-redux';

import { TopBar } from '../../components/TopBar/TopBar';
import { Button } from '../../components/Button/Button';
import { PasswordList } from '../../components/PasswordList/PasswordList';
import { Modal } from '../../components/Modal/Modal';
import { IAppState } from '../../store/interfaces';
import { IPassword } from '../../store/passwords/passwords.interfaces';
import PasswordForm from '../PasswordForm/PasswordForm';

export interface IPasswordsProps {
  showNewPasswordModal: boolean;
  passwords: IPassword[];

  newPassword: () => void;
  getPasswords: () => void;
  savePassword: (password: IPassword) => void;
  cancelNewPassword: () => void;
}

export interface IPasswordsState {
  selectedPasswordId: string | undefined;
}

class Passwords extends React.Component<IPasswordsProps> {
  public state: IPasswordsState = {
    selectedPasswordId: undefined
  };

  public setSelectedPassword = (selectedPasswordId: string) => {
    this.setState({
      selectedPasswordId
    });

    this.props.newPassword();
  };

  public unselectPassword = () => {
    this.setState({
      selectedPasswordId: undefined
    });
  };

  public onCloseModal = () => {
    this.unselectPassword();
    this.props.cancelNewPassword();
  };

  public componentDidMount() {
    this.props.getPasswords();
  }

  public render() {
    const selectedPassword = this.state.selectedPasswordId
      ? this.props.passwords.find(
          password => password.id === this.state.selectedPasswordId
        )
      : undefined;

    return (
      <>
        <Modal show={this.props.showNewPasswordModal}>
          <PasswordForm
            selectedPassword={selectedPassword}
            onCloseForm={this.onCloseModal}
            onSaveForm={this.props.savePassword}
          />
        </Modal>
        <TopBar>
          <Button text={'Add New'} onClickHandler={this.props.newPassword} />
        </TopBar>
        <PasswordList
          passwords={this.props.passwords}
          onSelectPassword={this.setSelectedPassword}
        />
      </>
    );
  }
}

type DispatchProperties =
  | 'newPassword'
  | 'cancelNewPassword'
  | 'savePassword'
  | 'getPasswords';

const mapStateToProps = (state: IAppState) => ({
  showNewPasswordModal: state.ui.showNewPasswordModal,
  passwords: state.password.passwords
});

const mapDispatchToProps = (
  dispatch: any
): Pick<IPasswordsProps, DispatchProperties> => ({
  getPasswords: () => dispatch(passwordActions.getPasswordsFromFirebase()),
  newPassword: () => dispatch(uiActions.newPassword()),
  savePassword: (password: IPassword) =>
    dispatch(passwordActions.savePasswordToFirebase(password)),
  cancelNewPassword: () => dispatch(uiActions.cancelNewPassword())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Passwords);
