import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import * as classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appFrame: {
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%'
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    'appBar-left': {
      marginLeft: drawerWidth
    },
    'appBar-right': {
      marginRight: drawerWidth
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3
    }
  });

export type anchorValues = 'left' | 'top' | 'right' | 'bottom' | undefined;

export interface IAppState {
  anchor?: anchorValues;
}

export interface IAppProps {
  classes: any;
}

class App extends React.Component<IAppProps, IAppState> {
  public state = {
    anchor: 'left' as anchorValues
  };

  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      anchor: value as anchorValues
    });
  };

  public render() {
    const { classes } = this.props;
    const { anchor } = this.state;

    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor={anchor}>
        <div className={classes.toolbar} />
        <Divider />
        <Divider />
      </Drawer>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, classes[`appBar-${anchor}`])}>
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap={true}>
                Permanent drawer
              </Typography>
            </Toolbar>
          </AppBar>
          {drawer}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography>
              {'You think water moves fast? You should see ice.'}
            </Typography>
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
