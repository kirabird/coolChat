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


// import React, { Component } from 'react'
// // import LinkList from './LinkList'
// // import CreateLink from './CreateLink'
// import Header from './components/Header'
// import { Switch, Route, Redirect } from 'react-router-dom'
// import AuthContainer from './components/AuthContainer'
// // import Search from './Search'

// class App extends Component {
//   render() {
//     return (
//       <div className="center w85">
//         <Header />
//         <div className="ph3 pv1 background-gray">
//           <Switch>
//             <Route exact path="/" render={() => <Redirect to="/new/1" />} />
//             {/* <Route exact path="/create" component={CreateLink} /> */}
//             <Route exact path="/login" component={AuthContainer} />
//             {/* <Route exact path="/search" component={Search} /> */}
//             {/* <Route exact path="/top" component={LinkList} />
//             <Route exact path="/new/:page" component={LinkList} /> */}
//           </Switch>
//         </div>
//       </div>
//     )
//   }
// }

// export default App