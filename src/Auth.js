import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import { setAuth } from './actions';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '20%'
  },
  button: {
    marginTop: 20
  }
});

const data = {
  username: 'Admin',
  password: '12345'
};

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      open: false,
      vertical: 'top',
      horizontal: 'center'
    };
  }

  handleOnchange = e => {
    const type = e.target.id;
    const value = e.target.value;
    this.setState({ [type]: value });
  };

  checkUserPassword = () => {
    const { username, password } = this.state;
    if (username === data.username && password === data.password) {
      this.props.setAuth(true);
      localStorage.setItem('LoginIn', true);
      this.props.history.push('/profile');
    } else {
      this.setState({ error: true });
    }
  };
  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { error } = this.state;
    const { classes } = this.props;
    return (
      <>
        <form className={classes.container} noValidate autoComplete="off">
          <span>
            {error ? (
              <Chip
                label="Имя пользователя или пароль введены не верно "
                className={classes.chip}
                variant="outlined"
              />
            ) : (
              ''
            )}
          </span>
          <TextField
            id="username"
            label="Имя пользователя"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="username"
            margin="normal"
            variant="filled"
            onChange={this.handleOnchange}
          />
          <TextField
            id="password"
            label="Пароль"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="filled"
            onChange={this.handleOnchange}
          />
          <Button
            className={classes.button}
            variant="contained"
            onClick={this.checkUserPassword}
          >
            Войти
          </Button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  setAuth: bool => dispatch(setAuth(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Auth));
