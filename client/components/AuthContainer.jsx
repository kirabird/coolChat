import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '400px',
    marginTop: '50px',
    flexDirection: 'column',
    padding: '15px',
  },
  button: {
    flexGrow: 1,
    margin: '5px',
  },
};

class AuthContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { handleSignUp, handleLogin } = this.props;

    return (
      <div className="auth">
        <form style={styles.container} noValidate autoComplete="off">
          <TextField
            id="usernameInput"
            label="Username"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="passwordInput"
            label="Password"
            margin="normal"
            variant="outlined"
          />

          <div style={{ display: 'flex' }}>
            <Button variant="contained" color="primary" style={styles.button}>
              Sign Up
            </Button>

            <Button variant="contained" color="primary" style={styles.button}>
              <Link to="/chat" style={{ color: '#FFF', textDecoration: 'none' }}>
                Login
              </Link>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

AuthContainer.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

export default AuthContainer;
