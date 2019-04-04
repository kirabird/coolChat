import gql from 'graphql-tag';

export const messageQuery = gql`
  {
    messages {
      username
      message
      created_at
      chatroom_id
    }
  }
`;

export const userQuery = gql`
  {
    users
  }
`;

export const chatroomQuery = gql`
  {
    chatroom_name
    _id
  }
`;
