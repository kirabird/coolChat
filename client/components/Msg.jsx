import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
  },
  username: {
    flexGrow: 1,
  },
  message: {
    flexGrow: 11,
  },
};

const Msg = (props) => {
  const { username, message } = props;
  return (
    <div className="message" style={styles.container}>
      <Typography style={styles.username} variant="p" color="inherit">
        {username}
      </Typography>
      <Typography style={styles.message} variant="p" color="inherit">
        { message }
      </Typography>
    </div>
  );
};

Msg.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Msg;
