import gql from 'graphql-tag';

export const messageQuery = gql`
  {
    messages {
      username
      message
      created_at
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
    chatroomName
  }
`;
