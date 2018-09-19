import * as React from 'react';
import { IPassword } from '../../../store/passwords/passwords.interfaces';

export interface IPasswordListItemProps {
  password: IPassword;

  onSelectPassword: (passwordId: string) => void;
}

export const PasswordListItem = (props: IPasswordListItemProps) => (
  <div>
    <div>{props.password.name}</div>
    <div>{props.password.login}</div>
    <div>
      <button onClick={() => props.onSelectPassword(props.password.id)}>
        Select
      </button>
    </div>
  </div>
);
