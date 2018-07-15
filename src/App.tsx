import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Passwords from './containers/Passwords/Passwords';

import Layout from './hoc/Layout/Layout';

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={Passwords} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
