import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { Mutation, Query } from 'react-apollo';
import history from '../history';
import { login, createUser } from '../schema/mutations';
// import { Router } from 'express';

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
      username: '',
      password: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleLogin() {
    console.log('login');
  }

  handleSignUp() {
    console.log('STATE: ', this.state);
  }

  render() {
    // const { handleSignUp, handleLogin } = this.props;

    return (
      <div className="auth">
        <form style={styles.container} noValidate autoComplete="off">
          <TextField
            id="usernameInput"
            label="Username"
            margin="normal"
            variant="outlined"
            onChange={e => this.setState({ username: e.target.value })}
          />

          <TextField
            id="passwordInput"
            label="Password"
            margin="normal"
            variant="outlined"
            onChange={e => this.setState({ password: e.target.value })}
          />

          <div style={{ display: 'flex' }}>
            <Mutation mutation={signup}>
              {signupMutation => (
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  onClick={() =>
                    signupMutation({
                      variables: {
                        userName: this.state.username,
                        password: this.state.password,
                      },
                    }).then(res => {
                      console.log('THIS IS RES', res);
                      if (res.data.signup.success) {
                        history.push('/chat');
                      } else {
                        return <h4>404</h4>;
                      }
                    })
                  }
                >
                  Signup
                </Button>
              )}
            </Mutation>

            <Mutation mutation={login}>
              {loginMutation => (
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  onClick={() =>
                    loginMutation({
                      variables: {
                        username: this.state.username,
                        password: this.state.password,
                      },
                    }).then(res => {
                      console.log('res from login', res);
                      if (res.data.login.success) {
                        history.push('/chat');
                      } else {
                        return <h4>404</h4>;
                      }
                    })
                  }
                >
                  Login
                </Button>
              )}
            </Mutation>
          </div>
        </form>
      </div>
    );
  }
  // _confirm = async () => {
  //   // ... you'll implement this 🔜
  // }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

// AuthContainer.propTypes = {
//   handleLogin: PropTypes.func.isRequired,
//   handleSignUp: PropTypes.func.isRequired
// };

export default AuthContainer;
