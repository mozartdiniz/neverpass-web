import * as React from 'react';

import { PasswordListItem } from './PasswordListItem/PasswordListItem';

import * as styles from './PasswordList.css';
import { IPassword } from '../../store/passwords/passwords.interfaces';

export interface IPasswordListProps {
  passwords: IPassword[];

  onSelectPassword: (passwordId: string) => void;
}

export const PasswordList = (props: IPasswordListProps) => (
  <div className={styles.PasswordList}>
    {props.passwords.map(password => (
      <PasswordListItem
        onSelectPassword={props.onSelectPassword}
        password={password}
        key={password.id}
      />
    ))}
  </div>
);
