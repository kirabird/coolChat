import React, { Component } from 'react';
import Msg from './Msg';
import MessageBox from './MessageBox';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
};

class ChatContainer extends Component {
  componentDidMount() {
    this.props.subscribeToMore();
  }

  render() {
    const { messages } = this.props.data;
    messages.splice(0, messages.length-10);
    return (
      <div id="chatContainer" style={styles.container}>
        <div style={{ height: '90%' }}>
          { messages
              && messages.reduce((acc, cur) => {
                acc.push(<Msg username={cur.username} message={cur.message} />);
                return acc;
              }, [])}
        </div>
        <MessageBox />
      </div>
    );
  }
}

export default ChatContainer;
