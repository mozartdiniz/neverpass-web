import * as React from 'react';
import * as uiActions from '../../store/ui/ui.actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { TopBar } from '../../components/TopBar/TopBar';
import { Button } from '../../components/Button/Button';
import { PasswordList } from '../../components/PasswordList/PasswordList';
import { Modal } from '../../components/Modal/Modal';
import { IAppState } from '../../store/interfaces';

export interface IPasswordsProps {
  showNewPasswordModal: boolean;

  newPassword: () => void;
  cancelNewPassword: () => void;
}

class Passwords extends React.Component<IPasswordsProps> {
  public render() {
    return (
      <>
        <Modal show={this.props.showNewPasswordModal}>
          <Button
            text={'Cancel'}
            onClickHandler={this.props.cancelNewPassword}
          />
        </Modal>
        <TopBar>
          <Button text={'Add New'} onClickHandler={this.props.newPassword} />
        </TopBar>
        <PasswordList />
      </>
    );
  }
}

type DispatchProperties = 'newPassword' | 'cancelNewPassword';

const mapStateToProps = (state: IAppState) => ({
  showNewPasswordModal: state.ui.showNewPasswordModal
});

const mapDispatchToProps = (
  dispatch: Dispatch
): Pick<IPasswordsProps, DispatchProperties> => ({
  newPassword: () => dispatch(uiActions.newPassword()),
  cancelNewPassword: () => dispatch(uiActions.cancelNewPassword())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Passwords);
