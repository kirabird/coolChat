import gql from 'graphql-tag';

export const createMessage = gql`
  mutation($userId: Int!, $message: String!) {
    createMessage(userId: $userId, message: $message) {
      mutation
      message {
        username
        message
      }
    }
  }
`;

export const createUser = gql`
  mutation($userName: String!, $password: String!) {
    createUser(userName: $userName) {
      userName
      passwords
    }
  }
`;

export const createChatroom = gql`
  mutation($chatroomName: String!) {
    createChatroom(chatroomName: $chatroomName) {
      chatroomName
    }
  }
`;
