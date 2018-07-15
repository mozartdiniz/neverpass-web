import * as React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import { MainContent } from '../../components/MainContent/MainContent';

import * as styles from './Layout.css';

export interface ILayoutProps {
  children: React.ReactNode;
}

class Layout extends React.Component<ILayoutProps> {
  public render() {
    return (
      <div className={styles.Layout}>
        <SideMenu />
        <MainContent>{this.props.children}</MainContent>
      </div>
    );
  }
}

export default Layout;
