import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthContainer from './components/AuthContainer';
import Header from './components/Header';
import ChatroomContainer from './components/ChatroomContainer';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { };
    // this.handleLogin = this.loginHandle.bind(this);
    // this.signUpHandle = this.signUpHandle.bind(this);
  }

  // loginHandle() {
  //   console.log('Login');
  // }

  // signUpHandle() {
  //   console.log('Signup');
  // }

  render() {
    return (
      <Router>
        <div id="app">
          <Header />
          <div>
            <Route exact path="/" component={AuthContainer} />
            <Route path="/chat" component={ChatroomContainer} />
          </div>
        </div>
      </Router>
      // <AuthContainer handleLogin={this.handleLogin} handleSignUp={this.signUpHandle} />
    );
  }
}

export default App;
