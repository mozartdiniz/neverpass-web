import * as React from 'react';
import { IPassword } from '../../store/passwords/passwords.interfaces';

export interface IPasswordFormProps {
  selectedPassword: IPassword;
}

class PasswordForm extends React.Component<IPasswordFormProps> {}

export default PasswordForm;
