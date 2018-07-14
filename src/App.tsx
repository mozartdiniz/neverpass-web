import * as React from 'react';
import * as generator from 'generate-password';
import { connect } from 'react-redux';
import SideMenu from './components/SideMenu/SideMenu';
import PasswordList from './components/PasswordList/PasswordList';
import { TopBar } from './components/TopBar/TopBar';
import { Button } from './components/Button/Button';
import { MainContent } from './components/MainContent/MainContent';

import * as styles from './App.css';
import { Modal } from './components/Modal/Modal';

const password = generator.generate({
  length: 20,
  numbers: true,
  symbols: true,
  uppercase: true
});

class App extends React.Component {
  public render() {
    return (
      <div className={styles.App}>
        <Modal show={false}>something!</Modal>
        <SideMenu />
        <MainContent>
          <TopBar>
            <Button text={'Add New'} />
            <div>Password: {password}</div>
          </TopBar>
          <PasswordList />
        </MainContent>
      </div>
    );
  }
}

export default connect()(App);
