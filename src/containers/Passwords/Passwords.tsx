import * as React from 'react';
import * as uiActions from '../../store/ui/ui.actions';
import * as passwordActions from '../../store/passwords/passwords.actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

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
  savePassword: (password: IPassword) => void;
  cancelNewPassword: () => void;
}

class Passwords extends React.Component<IPasswordsProps> {
  public render() {
    return (
      <>
        <Modal show={this.props.showNewPasswordModal}>
          <PasswordForm
            onCloseForm={this.props.cancelNewPassword}
            onSaveForm={this.props.savePassword}
          />
        </Modal>
        <TopBar>
          <Button text={'Add New'} onClickHandler={this.props.newPassword} />
        </TopBar>
        <PasswordList passwords={this.props.passwords} />
      </>
    );
  }
}

type DispatchProperties = 'newPassword' | 'cancelNewPassword' | 'savePassword';

const mapStateToProps = (state: IAppState) => ({
  showNewPasswordModal: state.ui.showNewPasswordModal,
  passwords: state.password.passwords
});

const mapDispatchToProps = (
  dispatch: Dispatch
): Pick<IPasswordsProps, DispatchProperties> => ({
  newPassword: () => dispatch(uiActions.newPassword()),
  savePassword: (password: IPassword) =>
    dispatch(passwordActions.saveNewPassword(password)),
  cancelNewPassword: () => dispatch(uiActions.cancelNewPassword())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Passwords);
