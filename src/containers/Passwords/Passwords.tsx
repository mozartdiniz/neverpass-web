import * as React from 'react';
import * as uiActions from '../../store/ui/ui.actions';
import { connect } from 'react-redux';

import { TopBar } from '../../components/TopBar/TopBar';
import { Button } from '../../components/Button/Button';
import { PasswordList } from '../../components/PasswordList/PasswordList';
import { Modal } from '../../components/Modal/Modal';

export interface IPasswordsProps {
  showNewPasswordModal: boolean;

  newPassword: () => void;
  cancelNewPassword: () => void;
}

class Passwords extends React.Component<IPasswordsProps> {
  public render() {
    return (
      <>
        <Modal show={this.props.showNewPasswordModal}>something!</Modal>
        <TopBar>
          <Button text={'Add New'} onClickHandler={this.props.newPassword} />
        </TopBar>
        <PasswordList />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  showNewPasswordModal: state.ui.showNewPasswordModal
});

const mapDispatchToProps = (dispatch: any) => ({
  newPassword: () => dispatch(uiActions.newPassword()),
  cancelNewPassword: () => dispatch(uiActions.cancelNewPassword())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Passwords);
