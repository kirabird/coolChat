import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { messageQuery } from '../schema/queries';
import MsgSub from '../schema/subscriptions';
import ChatContainer from './ChatContainer';
import Sidebar from './Sidebar';

const chatroomStyles = {
  display: 'flex',
};

class ChatroomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <Query query={messageQuery}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p> Error: {error.message} </p>;

          const more = () => subscribeToMore({
            document: MsgSub,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const { mutation, message } = subscriptionData.data.messageAdded;

              if (mutation !== 'CREATED') return prev;
              const { counter } = this.state;
              this.setState({
                counter: counter + 1,
              });

              return Object.assign({}, prev, {
                messages: [...prev.messages, message],
              });
            },
          });
          return <ChatContainer data={data} subscribeToMore={more} />;
        }}
      </Query>
    );
  }
}

export default ChatroomContainer;
