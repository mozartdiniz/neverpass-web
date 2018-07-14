import * as React from 'react';

import { PasswordListItem } from './PasswordListItem/PasswordListItem';

class PasswordList extends React.Component {
  public render() {
    return (
      <div>
        <PasswordListItem name={'Apple Id'} login={'mozart.diniz@gmail.com'} />
        <PasswordListItem
          name={'Booking.com'}
          login={'mozart.diniz@gmail.com'}
        />
        <PasswordListItem
          name={'Duolingo.com'}
          login={'mozart.diniz@gmail.com'}
        />
      </div>
    );
  }
}

export default PasswordList;
