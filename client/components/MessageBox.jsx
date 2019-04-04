import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import { createMessage } from '../schema/mutations';

const styles = {
  container: {
    color: 'pink',
    display: 'flex',
    padding: '10px'
  },
  textField: {
    flexGrow: 9
  },
  button: {
    flexGrow: 1
  }
};

class MessageBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(event) {
    const message = event.target.value;
    this.setState({ content: message });
  }

  keyPress(event) {
    if (event.keyCode === 13) {
      this.setState({ content: '' });
    }
  }

  render() {
    const { content } = this.state;
    return (
      <div className='messageBox' style={styles.container}>
        <TextField
          value={content}
          onChange={this.handleChange}
          style={styles.textField}
          onKeyDown={this.keyPress}
        />
        <Mutation mutation={createMessage}>
          {(newMsg, { data }) => (
            <Button
              onClick={() => {
                {
                  /* console.log(this.state.content); */
                }
                newMsg({
                  variables: {
                    user_id: 1,
                    message: this.state.content,
                    chatroom_id: 1
                  }
                });
                this.setState({ content: '' });
              }}
            >
              Send
            </Button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default MessageBox;

//
