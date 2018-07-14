import * as React from 'react';

import { MenuItem } from './MenuItem/MenuItem';

class SideMenu extends React.Component {
  public render() {
    return (
      <div>
        <h3>Password Manager</h3>
        <MenuItem label={'Passwords'} />
        <h3>Wallet</h3>
        <MenuItem label={'Personal Info'} />
      </div>
    );
  }
}

export default SideMenu;
