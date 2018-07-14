import * as React from 'react';

import * as styles from './MenuItem.css';

export interface IMenuItemProps {
  label: string;
  onClickAction?: () => void;
}

export const MenuItem = (props: IMenuItemProps) => (
  <div className={styles.MenuItem}>{props.label}</div>
);
