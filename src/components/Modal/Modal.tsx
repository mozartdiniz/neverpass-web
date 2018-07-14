import * as React from 'react';
import * as classnames from 'classnames';
import * as styles from './Modal.css';

export interface IModalProps {
  children: React.ReactNode;
  show: boolean;
}

export const Modal = (props: IModalProps) => (
  <div className={classnames(styles.Modal, { [styles.Hiden]: !props.show })}>
    <div className={styles.Overlay}>
      <div className={styles.Content}>{props.children}</div>
    </div>
  </div>
);
