import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { setAuth } from './actions';

class Profile extends Component {
  componentDidMount() {
    const localStore = localStorage.getItem('LoginIn');
    if (localStore === null) {
      this.props.history.push('/auth');
    }
  }
  render() {
    return (
      <>
        <Typography gutterBottom variant="h2" component="h2">
          Вы вошли в профиль.
        </Typography>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setAuth: bool => dispatch(setAuth(bool))
});

export default connect(
  null,
  mapDispatchToProps
)(Profile);
