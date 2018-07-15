import * as React from 'react';

import { PasswordListItem } from './PasswordListItem/PasswordListItem';

import * as styles from './PasswordList.css';
import { IPassword } from '../../store/passwords/passwords.interfaces';

export interface IPasswordListProps {
  passwords: IPassword[];
}

export const PasswordList = (props: IPasswordListProps) => (
  <div className={styles.PasswordList}>
    {props.passwords.map(password => (
      <PasswordListItem
        name={password.name}
        login={password.login}
        key={password.id}
      />
    ))}
  </div>
);
