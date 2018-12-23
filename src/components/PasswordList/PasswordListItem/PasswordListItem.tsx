import * as React from 'react';
import { IPassword } from '../../../store/passwords/passwords.interfaces';

import * as styles from './PasswordListItem.css';

export interface IPasswordListItemProps {
  password: IPassword;

  onSelectPassword: (passwordId: string) => void;
}

export const PasswordListItem = (props: IPasswordListItemProps) => (
  <div
    className={styles.PasswordListItem}
    onClick={() => props.onSelectPassword(props.password.id)}>
    <div>{props.password.name}</div>
    <div>{props.password.login}</div>
    <div className={styles.ButtonArea}>
      {/* <button onClick={() => props.onSelectPassword(props.password.id)}>
        Copy
      </button> */}
    </div>
  </div>
);
