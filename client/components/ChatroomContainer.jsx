import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { messageQuery } from '../schema/queries';
import MsgSub from '../schema/subscriptions';
import ChatContainer from './ChatContainer';

import Sidebar from './Sidebar';

const chatroomStyles = {
  display: 'flex',
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

// function AutoGrid(props) {
//   const { classes } = props;

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// });

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
        {({
          loading, error, data, subscribeToMore,
        }) => {
          if (loading) return <p>loading...</p>;
          if (error) {
            return (
              <p>
                {' '}
                Error:
                {error.message}
                {' '}
              </p>
            );
          }

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
          return (
            <div>
              <Grid container spacing={40}>
                <Grid item xs={3}>
                  <Card>
                    <ChatContainer
                      chatName="CAT LOVERS anonymous"
                      data={data}
                      subscribeToMore={more}
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Paper styles={{ margin: '10%', padding: '10%' }}>
                    <ChatContainer chatName="Anime crazed" data={data} subscribeToMore={more} />
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper styles={{ margin: '10%', padding: '10%' }}>
                    <ChatContainer
                      chatName="Algo club meetings"
                      data={data}
                      subscribeToMore={more}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper styles={{ margin: '10%', padding: '10%' }}>
                    <ChatContainer
                      chatName="Super SECRET meeting"
                      data={data}
                      subscribeToMore={more}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ChatroomContainer;
