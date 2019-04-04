import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
  const { username, handleLogOut } = props;

  const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" style={styles.grow}>
            Cool Chat
          </Typography>
          {username && (
            <Typography variant="p" color="inherit">
              {username}
            </Typography>
          )}
          {username && (
            <Button color="inherit">Logout</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

// Header.propTypes = {
//   username: PropTypes.string.isRequired,
//   handleLogOut: PropTypes.func.isRequired,
// };

export default Header;


// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'
// import { AUTH_TOKEN } from '../constants'

// class Header extends Component {
//   render() {
//     const authToken = localStorage.getItem(AUTH_TOKEN)
//     return (
//       <div className="flex pa1 justify-between nowrap orange">
//         <div className="flex flex-fixed black">
//           <div className="fw7 mr1">Hacker News</div>
//           <Link to="/" className="ml1 no-underline black">
//             new
//           </Link>
//           <div className="ml1">|</div>
//           <Link to="/top" className="ml1 no-underline black">
//             top
//           </Link>
//           <div className="ml1">|</div>
//           <Link to="/search" className="ml1 no-underline black">
//             search
//           </Link>
//           {authToken && (
//             <div className="flex">
//               <div className="ml1">|</div>
//               <Link to="/create" className="ml1 no-underline black">
//                 submit
//               </Link>
//             </div>
//           )}
//         </div>
//         <div className="flex flex-fixed">
//           {authToken ? (
//             <div
//               className="ml1 pointer black"
//               onClick={() => {
//                 localStorage.removeItem(AUTH_TOKEN)
//                 this.props.history.push(`/`)
//               }}
//             >
//               logout
//             </div>
//           ) : (
//               <Link to="/login" className="ml1 no-underline black">
//                 login
//             </Link>
//             )}
//         </div>
//       </div>
//     )
//   }
// }

// export default withRouter(Header)