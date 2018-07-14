import * as React from 'react';

import * as styles from './TopBar.css';

export interface ITopBarProps {
  children: React.ReactNode;
}

export const TopBar = (props: ITopBarProps) => (
  <div className={styles.TopBar}>{props.children}</div>
);
