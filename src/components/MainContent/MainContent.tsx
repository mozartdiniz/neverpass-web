import * as React from 'react';

import * as styles from './MainContent.css';

export interface IMainContentProps {
  children: React.ReactNode;
}

export const MainContent = (props: IMainContentProps) => (
  <div className={styles.MainContent}>{props.children}</div>
);
