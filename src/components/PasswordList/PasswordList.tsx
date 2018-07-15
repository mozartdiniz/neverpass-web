import * as React from 'react';

import { PasswordListItem } from './PasswordListItem/PasswordListItem';

import * as styles from './PasswordList.css';

export const PasswordList = () => (
  <div className={styles.PasswordList}>
    <PasswordListItem name={'Apple Id'} login={'mozart.diniz@gmail.com'} />
    <PasswordListItem name={'Booking.com'} login={'mozart.diniz@gmail.com'} />
    <PasswordListItem name={'Duolingo.com'} login={'mozart.diniz@gmail.com'} />
  </div>
);
