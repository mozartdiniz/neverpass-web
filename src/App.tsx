import * as React from 'react';

import SideMenu from './components/SideMenu/SideMenu';
import PasswordList from './components/PasswordList/PasswordList';
import { TopBar } from './components/TopBar/TopBar';
import { Button } from './components/Button/Button';
import { MainContent } from './components/MainContent/MainContent';

class App extends React.Component {
  public render() {
    return (
      <div>
        <SideMenu />
        <MainContent>
          <TopBar>
            <Button text={'Add New'} />
          </TopBar>
          <PasswordList />
        </MainContent>
      </div>
    );
  }
}

export default App;
