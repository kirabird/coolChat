import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants'

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
      login: true, // switch between Login and SignUp
      username: '',
      password: '',
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
            <Button 
              variant="contained" 
              color="primary" 
              style={styles.button}
              onClick={() => this.setState({ login: !login })}>
              Sign Up
            </Button>

            <Button 
              variant="contained" 
              color="primary" 
              style={styles.button}
              onClick={() => this._confirm()}>
              <Link to="/chat" style={{ color: '#FFF', textDecoration: 'none' }}>
                Login
              </Link>
              
            </Button>
          </div>
        </form>
      </div>
    );
  }
  // _confirm = async () => {
  //   // ... you'll implement this 🔜
  // }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

// AuthContainer.propTypes = {
//   handleLogin: PropTypes.func.isRequired,
//   handleSignUp: PropTypes.func.isRequired,
// };

export default AuthContainer;


// import React, { Component } from 'react'
// import { AUTH_TOKEN } from '../constants'
// import { Mutation } from 'react-apollo'
// import gql from 'graphql-tag'

// const SIGNUP_MUTATION = gql`
//   mutation SignupMutation($email: String!, $password: String!, $name: String!) {
//     signup(email: $email, password: $password, name: $name) {
//       token
//     }
//   }
// `

// const LOGIN_MUTATION = gql`
//   mutation LoginMutation($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//     }
//   }
// `

// class AuthContainer extends Component {
//   state = {
//     login: true, // switch between Login and SignUp
//     email: '',
//     password: '',
//     name: '',
//   }

//   render() {
//     const { login, email, password, name } = this.state
//     return (
//       <div>
//         <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
//         <div className="flex flex-column">
//           {!login && (
//             <input
//               value={name}
//               onChange={e => this.setState({ name: e.target.value })}
//               type="text"
//               placeholder="Your name"
//             />
//           )}
//           <input
//             value={email}
//             onChange={e => this.setState({ email: e.target.value })}
//             type="text"
//             placeholder="Your email address"
//           />
//           <input
//             value={password}
//             onChange={e => this.setState({ password: e.target.value })}
//             type="password"
//             placeholder="Choose a safe password"
//           />
//         </div>
//         <div className="flex mt3">
//           <Mutation
//             mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
//             variables={{ email, password, name }}
//             onCompleted={data => this._confirm(data)}
//           >
//             {mutation => (
//               <div className="pointer mr2 button" onClick={mutation}>
//                 {login ? 'login' : 'create account'}
//               </div>
//             )}
//           </Mutation>
//           <div
//             className="pointer button"
//             onClick={() => this.setState({ login: !login })}
//           >
//             {login ? 'need to create an account?' : 'already have an account?'}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   _confirm = async data => {
//     const { token } = this.state.login ? data.login : data.signup
//     this._saveUserData(token)
//     this.props.history.push(`/`)
//   }

//   _saveUserData = token => {
//     localStorage.setItem(AUTH_TOKEN, token)
//   }
// }

// export default AuthContainer