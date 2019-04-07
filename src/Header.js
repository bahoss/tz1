import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Button
                  component={RouterLink}
                  to="/"
                  className={classes.button}
                >
                  Главная
                </Button>
                <Button
                  component={RouterLink}
                  to="/news"
                  className={classes.button}
                >
                  Новости
                </Button>
                <Button
                  component={RouterLink}
                  to="/profile"
                  className={classes.button}
                >
                  {' '}
                  Профиль
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Header);
